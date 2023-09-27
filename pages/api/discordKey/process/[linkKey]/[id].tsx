import {NextApiRequest, NextApiResponse} from "next";

import {Keyv} from "../../../../../handles/Keyv";

export default async function handle(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== "POST") {
        response.status(405).end();
        return;
    }

    const {linkKey, id} = request.query;
    const linkReq = await Keyv.get("minecraftLinkReq") || {};
    const uuid = Object.keys(linkReq).find(key => linkReq[key] === linkKey);

    if (!uuid || !id) {
        response.status(200).json({
            className: "text-danger",
            text: `No valid code given. Please generate a new code by running "/link" in-game.`
        });
        return;
    }

    const linked = await Keyv.get("minecraft") || {};
    if (linked[uuid]) {
        response.status(200).json({
            className: "text-danger",
            text: "Account is already linked."
        });
        return;
    }
    // @ts-ignore
    linked[id] = uuid;
    await Keyv.set("minecraft", linked);
    // @ts-ignore
    delete linkReq[linkKey];
    await Keyv.set("minecraftLinkReq", linkReq);

    response.status(200).json({
        className: "text-success",
        text: "Account successfully linked!\n You may close this window."
    });
}
