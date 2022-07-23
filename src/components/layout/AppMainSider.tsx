import React from "react";
import {Menu, MenuProps} from "antd";
import {
    AppstoreAddOutlined,
    DashboardOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import "./layout.css"
import SubMenuItem from "../menu/SubMenuItem";

interface SiderProp {
    collapsed: boolean
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode,
                 key?: React.Key,
                 icon?: React.ReactNode,
                 children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label
    } as MenuItem
}

const items: MenuItem[] = [
    getItem((<SubMenuItem name={"Dashboard"} link={""}/>), "1", <DashboardOutlined/>),
    getItem((<SubMenuItem name={"NLP"} link={""}/>), "2", <AppstoreAddOutlined/>),
    getItem((<SubMenuItem name={"CV"} link={""}/>), "3", <AppstoreAddOutlined/>),
    getItem((<SubMenuItem name={"Annotation"} link={"annotation"}/>), "4", <AppstoreAddOutlined/>)
]

const AppMainSider: React.FC<SiderProp> = (prop: SiderProp) => {
    return (
        <Sider trigger={null} collapsible collapsed={prop.collapsed}>
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={["1"]}
                items={items}
            />
        </Sider>
    )
}

export default AppMainSider