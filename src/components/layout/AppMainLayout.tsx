import React, {useState} from "react";
import {Layout} from "antd";
import "./layout.css"
import AppMainSider from "./AppMainSider";
import AppMainHeader from "./AppMainHeader";
import {Outlet} from "react-router-dom";

const {Content} = Layout;

const AppMainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <AppMainSider collapsed={collapsed}/>
            <Layout className="site-layout">
                <AppMainHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
                <div>
                    <Content>
                        <Outlet/>
                    </Content>
                </div>
            </Layout>
        </Layout>
    )
}

export default AppMainLayout