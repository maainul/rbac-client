
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faGoogle, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff, faArrowUpWideShort, faArrowDownWideShort, faBars, faMoon, faBell, faMessage, faToggleOff, faToggleOn, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import logo from "../logo512.png"

const LandingPage = () => {
    return (
        <div className='dashboard-main-container h-screen flex justify-center items-center bg-slate-100'>
            <div className="dashboard-main-row h-[100vh] w-[99vw] bg-gray-100 rounded-lg flex justify-between font-medium">
                {/* LEFT COLUMN */}
                <div className="dashboard-main-col-left bg-white h-[100vh] w-[13vw] text-sm flex flex-col justify-between shadow-lg">

                    {/* Logo and Company Name */}
                    <div className="px-5 py-6 cursor-pointer items-center border-b-2 border-b-gray-300 justify-between flex gap-2 mb-6">
                        <div className='flex gap-3'>
                            <img src={logo} className="w-8" alt="Logo" />
                            <span className="font-bold text-2xl text-blue-600 text-center">RBAC</span>
                        </div>
                        <FontAwesomeIcon icon={faBars} className="text-xl text-gray-400" />
                    </div>

                    {/* Navigation Menus */}
                    <div className='pb-1 cursor-pointer'>
                        <div className='nav-title flex items-center justify-between bg-white px-5 py-2'>
                            <span className='text-blue-400 border-b border-blue-500 uppercase text-clip overflow-hidden'>Dashboard</span>
                            {/* <FontAwesomeIcon icon={faArrowDownWideShort} /> */}
                            <FontAwesomeIcon icon={faChevronDown} className='text-lg text-gray-400' />
                        </div>
                        <div className='px-8 py-3 hover:bg-blue-500 transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faGithub} className='text-gray-600 hover:text-white' /><span className='pl-3'>Dasboard</span></div>
                        <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faFacebook} className='text-gray-600' /><span className='pl-3'>Dasboard</span></div>
                        <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faLinkedin} className='text-gray-600' /><span className='pl-3'>Dasboard</span></div>
                    </div>
                    <div className='pb-1 cursor-pointer'>
                        <div className='nav-title flex items-center justify-between  w-full bg-white px-3 py-2'>
                            <span className='text-blue-400 border-b border-blue-500 uppercase'>Charts</span>
                            {/* <FontAwesomeIcon icon={faArrowDownWideShort} /> */}
                            <FontAwesomeIcon icon={faChevronDown} className='text-lg text-gray-400' />
                        </div>
                        <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faGoogle} className='text-gray-600' /><span className='pl-3'>Dasboard</span></div>
                        <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faTwitter} className='text-gray-600' /><span className='pl-3'>Dasboard</span></div>
                        <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faApple} className='text-gray-600' /><span className='pl-3'>Dasboard</span></div>
                    </div>
                    <div className='pb-1 cursor-pointer '>
                        <div className='nav-title flex items-center justify-between bg-white px-5 py-2'>
                            <span className='text-blue-400 border-b border-blue-500 uppercase text-clip overflow-hidden'>Dashboard</span>
                            {/* <FontAwesomeIcon icon={faArrowDownWideShort} /> */}
                            <FontAwesomeIcon icon={faChevronDown} className='text-lg text-gray-400' />
                        </div>
                        <div className='px-8 py-3 hover:bg-blue-500 transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faGithub} className='text-gray-600 hover:text-white' /><span className='pl-3'>Dasboard</span></div>
                        <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faFacebook} className='text-gray-600' /><span className='pl-3'>Dasboard</span></div>
                        <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faLinkedin} className='text-gray-600' /><span className='pl-3'>Dasboard</span></div>
                    </div>


                    <div className='pb-1 cursor-pointer'>
                        <div className='nav-title flex items-center justify-between w-full bg-white px-3 py-2'>
                            <span className='text-blue-400 hover:bg-blue-500  border-b border-blue-500 uppercase'>Page</span>
                            {/* <FontAwesomeIcon icon={faArrowDownWideShort} /> */}
                            <FontAwesomeIcon icon={faChevronDown} className='text-lg text-gray-400' />
                        </div>
                        <span className='text-blue-400 border-b border-blue-400 uppercase'></span>
                        <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faGoogle} className='text-gray-600' /><span className='pl-3'>Dasboard</span></div>
                        <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faTwitter} className='text-gray-600' /><span className='pl-3'>Dasboard</span></div>
                        <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white hover:pl-9 hover:transition hover:duration-1000'><FontAwesomeIcon icon={faApple} className='text-gray-600' /><span className='pl-3'>Dasboard</span></div>
                    </div>
                    <div className='flex-grow'></div>
                    <div className='p-3 flex gap-3 items-center font-bold text-2xl text-white 
                        hover:transition duration-1000 hover:text-white justify-between px-10 pb-4'>
                        <FontAwesomeIcon icon={faPowerOff} className='text-red-400 cursor-pointer' />
                        <FontAwesomeIcon icon={faMoon} className='text-black cursor-pointer' />

                    </div>
                </div>

                {/* Right Column / Main Content of Right Side */}
                <div className='dashboard-main-col-right bg-gray-100 h-screen w-[86vw] flex justify-center items-center'>
                    <div className='h-full w-[90vw] bg-gray-100'>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;
