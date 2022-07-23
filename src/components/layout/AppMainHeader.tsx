import React from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Header} from "antd/es/layout/layout";

interface HeaderProp {
    collapsed: boolean
    setCollapsed: (col: boolean) => void
}

const AppMainHeader: React.FC<HeaderProp> = (prop: HeaderProp) => {
    return (
        <Header className="site-layout-background">
            {React.createElement(prop.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => prop.setCollapsed(!prop.collapsed),
            })}
        </Header>
    )
}

export default AppMainHeader