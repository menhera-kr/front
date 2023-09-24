import { NextApiHandler } from "next";
import haversine from "haversine-distance";
import _ from "lodash";

const place: NextApiHandler = async (req, res) => {
    const { lat, lng, count } = req.query;
    if (req.method !== "GET") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    if (!lat || !lng || !count) {
        res.status(400).json({ error: "Invalid query" });
        return;
    } else if (typeof lat !== "string" || typeof lng !== "string" || typeof count !== "string") {
        res.status(400).json({ error: "Invalid query" });
        return;
    }

    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);
    const countNum = parseInt(count);
    if (isNaN(latNum) || isNaN(lngNum) || isNaN(countNum)) {
        res.status(400).json({ error: "Invalid query" });
        return;
    }

    const params = new URLSearchParams({ lat: latNum.toString(), lon: lngNum.toString() });
    const response = await fetch(`https://${process.env.API_SERVER_URL}/api/geo/recommend?${params.toString()}`, {
        method: "GET",
    });

    if (!response.ok) {
        res.status(500).json({ error: "알 수 없는 오류가 발생 하였습니다." });
        return;
    }

    const data = await response.json();
    if (data.status !== true) {
        res.status(500).json({ error: data.message });
        return;
    } else if (!("source" in data)) {
        res.status(500).json({ error: "알 수 없는 오류가 발생 하였습니다." });
        return;
    }

    const items = data.source;

    res.json(
        _.chain(items)
            .uniqBy(x => x["기관명"])
            .take(countNum)
            .value(),
    );
};

export default place;
