import React from "react";

export default function StatusContainer({children}: {children: React.ReactNode}) {
    return (
        <div className="vh-100 d-flex align-items-center justify-content-center display-6">
            {children}
        </div>
    );
}
