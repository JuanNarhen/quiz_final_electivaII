import React from "react";
import { Layout, Tabs } from "antd";
import Login from "../../../components/AdminComponents/Login";
import Register from "../../../components/AdminComponents/Register";
import Logo from "../../../assests/img/png/logo.png";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import "./signIn.scss";

export default function SignIn() {
    const { Content, Footer } = Layout;
    const { TabPane } = Tabs;
    return (
        <Layout className="sign-in">
            <Content className="sign-in_content">
                <h1 className="sign-in_content-logo">
                    <img src={Logo} alt="" />
                </h1>
                <div className="sign-in_content-tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Iniciar sesión</span>} key="1">
                            <Login />
                        </TabPane>
                        <TabPane tab={<span>Registro</span>} key="2">
                            <Register />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
            <Footer>
                <Button type="link" onClick={() => console.log("Github")} href="https://github.com/JuanNarhen/quiz_final_electivaII.git">
                    <GithubOutlined style={{ fontSize: "17px" }} /> JuanNarHen
                </Button>
            </Footer>
        </Layout>
    );
}