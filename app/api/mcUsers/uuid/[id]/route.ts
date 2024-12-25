import {NextRequest, NextResponse} from "next/server";

import {Keyv} from "@/handles/Keyv";

export async function GET(request: NextRequest, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const linked = await Keyv.get("minecraft") || {};
    return new NextResponse(linked[id] || "");
}
