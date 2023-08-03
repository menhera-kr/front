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

    const response = await fetch(
        "https://raw.githubusercontent.com/menhera-kr/data/main/data_preprocessed2_%EA%B2%BD%EA%B8%B0%EB%8F%84.json",
        {
            method: "GET",
        },
    );

    const data = await response.json();

    res.json(
        _.chain(data)
            .uniqBy(x => x["기관명"])
            .map(x => ({
                ...x,
                distance: haversine(
                    { lat: latNum, lng: lngNum },
                    { lat: parseFloat(x["주소"]["위도"]), lng: parseFloat(x["주소"]["경도"]) },
                ),
            }))
            .orderBy(x => x.distance, "asc")
            .take(countNum)
            .value(),
    );
};

export default place;
