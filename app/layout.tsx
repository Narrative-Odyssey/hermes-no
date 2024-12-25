import React from "react";
import {Metadata, Viewport} from "next";
import localFont from "next/font/local";

import "bootstrap/dist/css/bootstrap.css";

import BootstrapJS from "./BootstrapJS";

const font = localFont({src: "../public/Monocraft-no-ligatures.ttf", weight: "300"});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NODE_ENV === "development" ?
        "http://localhost:" + process.env.PORT :
        "https://narrativeodyssey.uk"
    ),
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" data-bs-theme="dark">
            <BootstrapJS/>
            <head>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#000000"/>
                <meta name="theme-color" content="#ffffff"/>
                <title>Narrative Odyssey</title>
            </head>
            <body className={"h-100 text-light bg-black " + font.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
