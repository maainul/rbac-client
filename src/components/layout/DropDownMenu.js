import React from 'react'
import navigationData from './MenuList.json';
import SidebarItem from './SidebarItem';

const DropDownMenu = () => {
    return (
        <>
            {
                navigationData.navItems.map((item, index) => (
                    <SidebarItem key={index} {...item} />
                ))
            }
        </>
    )
}

export default DropDownMenu


