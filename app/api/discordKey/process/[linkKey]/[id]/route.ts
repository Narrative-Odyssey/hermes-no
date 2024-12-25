import {NextRequest, NextResponse} from "next/server";

import {Keyv} from "@/handles/Keyv";

export async function POST(request: NextRequest) {
    const {searchParams} = request.nextUrl;
    const linkKey = searchParams.get("linkKey") || "";
    const id = searchParams.get("id") || "";

    const linkReq = await Keyv.get("minecraftLinkReq") || {};
    const uuid = Object.keys(linkReq).find(key => linkReq[key] === linkKey);

    if (!uuid) return NextResponse.json({
        className: "text-danger",
        text: `No valid code given. Please generate a new code by running "/link" in-game.`
    });

    const linked = await Keyv.get("minecraft") || {};
    if (linked[uuid]) return NextResponse.json({
        className: "text-danger",
        text: "Account is already linked."
    });

    linked[id] = uuid;
    await Keyv.set("minecraft", linked);
    delete linkReq[linkKey];
    await Keyv.set("minecraftLinkReq", linkReq);

    return NextResponse.json({
        className: "text-success",
        text: "Account successfully linked!\n You may close this window."
    });
}
