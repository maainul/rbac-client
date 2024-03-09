import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faGoogle, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff, faArrowUpWideShort, faArrowDownWideShort, faBars, faMoon, faBell, faMessage, faToggleOff, faToggleOn, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const SidebarItem = ({ title, icon, submenu }) => {
    return (
        <div>
            <div className='pb-1 cursor-pointer'>
                <div className='nav-title flex items-center justify-between  w-full bg-white px-3 py-2'>
                    <span className='text-blue-400 border-b border-blue-500 uppercase'>{title}</span>
                    {/* <FontAwesomeIcon icon={faArrowDownWideShort} /> */}
                    <FontAwesomeIcon icon={icon} className='text-lg text-gray-400' />
                </div>
                {submenu.map((subItem, index) => (
                    <div key={index} className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'>
                        <FontAwesomeIcon icon={subItem.icon} className='text-gray-600' />
                        <span className='pl-3'>{subItem.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SidebarItem
