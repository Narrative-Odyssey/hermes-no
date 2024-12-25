import {NextRequest, NextResponse} from "next/server";

import {Keyv} from "@/handles/Keyv";

export async function GET(request: NextRequest, {params}: {params: Promise<{uuid: string}>}) {
    const {uuid} = await params;
    const linked = await Keyv.get("minecraft") || {};
    return new NextResponse(Object.keys(linked).find(key => linked[key] === uuid));
}
