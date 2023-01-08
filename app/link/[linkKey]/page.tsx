"use client";

import useSWR from "swr";
import React, {useEffect, useState} from "react";
import {signIn, useSession} from "next-auth/react";

import StatusContainer from "../StatusContainer";

function Message({props}: {props: {linkKey: string, id: string}}) {
    const {linkKey, id} = props;
    const [message, setMessage] = useState(<></>);

    useSWR(`/api/discordKey/process/${linkKey}/${id}`, url => {
        fetch(url, {method: "POST"}).then(y => y.json()).then((response: {className: string, text: string}) => {
            const {className, text} = response;
            setMessage(<div className={className}>{text}</div>);
        })
    });

    return message;
}

export default function Page({params}: {params: {linkKey: string}}) {
    const {linkKey} = params;
    const {data, status} = useSession();
    const [message, setMessage] = useState(<></>);

    useEffect(() => {
        (async () => {
            switch (status) {
                case "loading":
                    break;
                case "unauthenticated": {
                    await signIn("discord");
                    break;
                }
                case "authenticated": {
                    // @ts-ignore
                    const id = data?.user?.id;
                    setMessage(<Message props={{linkKey, id}} />);
                    break;
                }
            }
        })();
    }, [status, data, linkKey]);

    return (<StatusContainer>{message}</StatusContainer>);
}
