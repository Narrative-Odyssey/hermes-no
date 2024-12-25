import {NextRequest, NextResponse} from "next/server";

export default class APIAuthenticate {

    // noinspection JSUnusedLocalSymbols
    private constructor() {}

    public static readonly UNAUTHORIZED = new NextResponse("Unauthorized.", {
        status: 401,
        headers: {"WWW-Authenticate": "Bearer"}
    });

    public static isUnauthorised(request: NextRequest) {
        const authorization = request.headers.get("Authorization");
        if (!authorization?.startsWith("Bearer")) return true;
        return authorization.substring("Bearer ".length) !== process.env.API_TOKEN;
    }

}
