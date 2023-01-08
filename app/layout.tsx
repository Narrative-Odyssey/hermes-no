"use client";

import React, {useEffect} from "react";
import {SessionProvider} from "next-auth/react";

import {Spectral} from "@next/font/google";

import "bootstrap/dist/css/bootstrap.css";

const spectral = Spectral({subsets: ["latin"], weight: "400"});

export default function RootLayout({children}: {children: React.ReactNode}) {
    useEffect(() => {
        const {Tooltip} = require("bootstrap");
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
    }, []);

    return (
        <SessionProvider>
            <html lang="en">
                <body className={"h-100 text-light bg-black " + spectral.className}>
                    <main>{children}</main>
                </body>
            </html>
        </SessionProvider>
    );
}
