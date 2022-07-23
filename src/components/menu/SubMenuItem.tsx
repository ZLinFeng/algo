import React from "react";

interface SubMenuItemProp {
    name: string
    link: string
}

const SubMenuItem: React.FC<SubMenuItemProp> = (prop: SubMenuItemProp) => {

    const menuJump = () => {
        if (prop.link.length > 0) {
            document.location.href = prop.link
        }
    }
    return (
        <div onClick={menuJump}>
            {prop.name}
        </div>
    )
}

export default SubMenuItem