import React from "react";

type TextType =
    | "danger"
    | "success"
    ;

export default function StatusContainer({children, type}: {children: React.ReactNode, type?: TextType}) {
    return (
        <div className={"vh-100 d-flex align-items-center justify-content-center display-6" + (type ? " text-" + type : "")}>
            {children}
        </div>
    );
}
