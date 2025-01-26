"use client";

import {signIn} from "next-auth/react";

export default function Discord() {
    if (typeof window !== "undefined") {
        signIn("discord").then();
    }
    return (<></>);
}
