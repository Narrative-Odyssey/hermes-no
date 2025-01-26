import React from "react";

import NoCode from "../NoCode";
import Discord from "./Discord";

import {auth} from "@/auth";

import {Keyv} from "@/handles/Keyv";

import StatusContainer from "@/components/StatusContainer";

export default async function Page(props: {params: Promise<{linkKey: string}>}) {
    const session = await auth();
    if (!session?.user?.id) return (<Discord/>);

    const {linkKey} = await props.params;
    const linkReq = await Keyv.get("minecraftLinkReq") || {};
    const uuid = Object.keys(linkReq).find(key => linkReq[key] === linkKey);
    if (!uuid) return (<NoCode/>);

    const linked = await Keyv.get("minecraft") || {};
    if (linked[uuid]) return (<StatusContainer type="danger">Account is already linked.</StatusContainer>);

    const id = session?.user?.id;
    linked[id] = uuid;
    await Keyv.set("minecraft", linked);
    delete linkReq[linkKey];
    await Keyv.set("minecraftLinkReq", linkReq);

    return (<StatusContainer type="success">Account successfully linked!<br/>You may close this window.</StatusContainer>);
}
