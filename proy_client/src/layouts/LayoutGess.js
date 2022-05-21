import React from "react";
import { Layout } from "antd";

export default function LayoutGuess(props) {
    const { children } = props;
    return (
        <Layout>
            <Layout className="layout">
                <h2 className="fixed_header">Guess Menu</h2>
                <div>{children}</div>
                <h5 className="fixed_footer">Guess Footer</h5>
            </Layout>
        </Layout>
    );
}