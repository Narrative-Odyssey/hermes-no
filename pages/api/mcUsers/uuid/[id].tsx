import {NextApiRequest, NextApiResponse} from "next";

import {Keyv} from "../../../../handles/Keyv";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== "GET") {
        response.status(405).end();
        return;
    }

    const linked = await Keyv.get("minecraft") || {};
    // @ts-ignore
    response.status(200).send(linked[request.query.id] || "");
}
