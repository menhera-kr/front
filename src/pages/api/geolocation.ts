import _ from "lodash";
import { NextApiHandler } from "next";

const geolocation: NextApiHandler = async (req, res) => {
    if (!process.env.NCP_APIGW_API_KEY_ID || !process.env.NCP_APIGW_API_KEY) {
        return res.status(500).json({ message: "NCP_APIGW_API_KEY_ID or NCP_APIGW_API_KEY is not set" });
    }

    if (req.method !== "GET") {
        return res.status(405).json({ message: "Only GET method is allowed" });
    }

    const { lat, lng } = req.query;
    if (!lat || !lng) {
        return res.status(400).json({ message: "lat, lng is required" });
    }

    const coords = `${lng},${lat}`;
    const data = await fetch(
        `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${coords}&output=json`,
        {
            method: "GET",
            headers: {
                "X-NCP-APIGW-API-KEY-ID": process.env.NCP_APIGW_API_KEY_ID,
                "X-NCP-APIGW-API-KEY": process.env.NCP_APIGW_API_KEY,
            },
        },
    ).then(r => r.json());

    if (data.status.code !== 0) {
        return res.status(500).json({ message: data.status.message });
    }

    const { region } = data.results[0];
    const { area1, area2, area3, area4 } = region;

    res.json({
        address: _.compact([area1.name, area2.name, area3.name, area4.name]).join(" "),
    });
};

export default geolocation;
