import {NextApiRequest, NextApiResponse} from "next";

import {Keyv} from "../../../handles/Keyv";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== "GET") {
        response.status(405).end();
        return;
    }

    response.status(200).send(await Keyv.get("minecraft") || {});
}
