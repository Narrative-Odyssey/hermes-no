import * as crypto from "crypto";

import {NextRequest, NextResponse} from "next/server";

import {Keyv} from "@/handles/Keyv";
import APIAuthenticate from "@/handles/APIAuthenticate";

export async function POST(request: NextRequest, {params}: {params: Promise<{uuid: string}>}) {
    if (APIAuthenticate.isUnauthorised(request)) return APIAuthenticate.UNAUTHORIZED;
    const {uuid} = await params;

    const minecraftLinkReq = await Keyv.get("minecraftLinkReq") || {};
    const key = crypto.randomBytes(8).toString("hex");
    minecraftLinkReq[uuid] = key;
    await Keyv.set("minecraftLinkReq", minecraftLinkReq);

    return new NextResponse(key);
}
