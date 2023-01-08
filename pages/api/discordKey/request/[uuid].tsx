import * as crypto from "crypto";
import {NextApiRequest, NextApiResponse} from "next";

import {Keyv} from "../../../../handles/Keyv";
import {isUnauthorisedAPIRequest} from "../../../../handles/isUnauthorisedAPIRequest";

export default async function GetKey(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== "POST") {
        response.status(405).end();
        return;
    }

    if (isUnauthorisedAPIRequest(request, response)) return;

    const {uuid} = request.query;
    const minecraftLinkReq: any = await Keyv.get("minecraftLinkReq") || {};
    const key = crypto.randomBytes(8).toString("hex");
    // @ts-ignore
    minecraftLinkReq[uuid] = key;
    await Keyv.set("minecraftLinkReq", minecraftLinkReq);
    // @ts-ignore
    response.status(200).send(key);
}
