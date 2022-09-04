import * as React from "react";


export default function Layout({ children }) {

    return (
        <div>
            <nav>
                <ul>
                    <li>Hi</li>
                </ul>
            </nav>
            {children}
        </div>
    );
}

