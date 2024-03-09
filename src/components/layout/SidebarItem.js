import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SidebarItem = ({ item }) => {
    return (
        <div className='pb-2'>
            <div className='nav-title flex items-center justify-between w-full bg-gray-200 px-3 py-2 cursor-pointer'>
                <span className='text-blue-500 uppercase font-semibold text-sm'>{item.title}</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            {Array.isArray(item.submenu) && item.submenu.length > 0 && (
                item.submenu.map((subItem, subIndex) => (
                    <div key={subIndex} className='px-8 py-2 transition duration-500 hover:bg-blue-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000 flex item-center justify-start cursor-pointer'>
                        <img src={subItem.icon} alt={subItem.label} className='w-4 h-4 text-gray-600 mt-1' />
                        <span className='pl-3 text-gray-600 text-sm'>{subItem.label}</span>
                    </div>
                ))
            )}
        </div>
    )
}

export default SidebarItem;
