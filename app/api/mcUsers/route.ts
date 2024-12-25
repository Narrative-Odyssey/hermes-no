import {NextResponse} from "next/server";

import {Keyv} from "@/handles/Keyv";

export async function GET() {
    return NextResponse.json(await Keyv.get("minecraft") || {});
}
