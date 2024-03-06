
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faGoogle, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff,faArrowUpWideShort,faArrowDownWideShort,faBars,faMoon,faBell,faMessage,faToggleOff,faToggleOn,faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons';
import logo from "../cl.png"
import Profile from "../user.jpg"

const  LandingPage= () =>{
    return(
        <div className='dashboard-main-container h-screen flex justify-center items-center bg-slate-100'>
            <div className="dashboard-main-row h-[100vh] w-[99vw] bg-white rounded-lg flex justify-between font-medium">
                <div className="dashboard-main-col-left bg-slate-100 h-[100vh] w-[13vw] text-sm flex flex-col justify-between">
                            <div className='flex justify-between gap-4 px-4 py-6 cursor-pointer'>
                                <div className="dasboard-img-nav text-center"> <img src={logo} alt="logo"/></div>
                                <FontAwesomeIcon icon={faBars}  className='text-2xl text-gray-400'/>
                        </div>
                        {/* Navigation Menus */}
                        <div className='pb-1 cursor-pointer'>
                            <div className='nav-title flex items-center justify-between bg-gray-200 px-5 py-2'>
                                <span className='text-blue-400 border-b border-blue-500 uppercase text-clip overflow-hidden'>Dashboard</span>
                                {/* <FontAwesomeIcon icon={faArrowDownWideShort} /> */}
                                <FontAwesomeIcon icon={faChevronDown} className='text-lg text-gray-400'/>
                            </div>
                            <div className='px-8 py-3 hover:bg-blue-500 transition duration-500 hover:text-white'><FontAwesomeIcon icon={faGithub} className='text-gray-600 hover:text-white'/><span className='pl-3'>Dasboard</span></div>
                            <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white'><FontAwesomeIcon icon={faFacebook} className='text-gray-600'/><span className='pl-3'>Dasboard</span></div>
                            <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white'><FontAwesomeIcon icon={faLinkedin} className='text-gray-600'/><span className='pl-3'>Dasboard</span></div>
                            </div>
                            <div className='pb-1 cursor-pointer'>
                            <div className='nav-title flex items-center justify-between  w-full bg-gray-200 px-3 py-2'>
                                <span className='text-blue-400 border-b border-blue-500 uppercase'>Charts</span>
                                {/* <FontAwesomeIcon icon={faArrowDownWideShort} /> */}
                                <FontAwesomeIcon icon={faChevronDown} className='text-lg text-gray-400'/>
                            </div>
                            <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white'><FontAwesomeIcon icon={faGoogle} className='text-gray-600'/><span className='pl-3'>Dasboard</span></div>
                            <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white'><FontAwesomeIcon icon={faTwitter} className='text-gray-600'/><span className='pl-3'>Dasboard</span></div>
                            <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white'><FontAwesomeIcon icon={faApple} className='text-gray-600'/><span className='pl-3'>Dasboard</span></div>
                       </div>
                        <div className='pb-1 cursor-pointer '>
                            <div className='nav-title flex items-center justify-between bg-gray-200 px-5 py-2'>
                                <span className='text-blue-400 border-b border-blue-500 uppercase text-clip overflow-hidden'>Dashboard</span>
                                {/* <FontAwesomeIcon icon={faArrowDownWideShort} /> */}
                                <FontAwesomeIcon icon={faChevronDown} className='text-lg text-gray-400'/>
                            </div>
                            <div className='px-8 py-3 hover:bg-blue-500 transition duration-500 hover:text-white'><FontAwesomeIcon icon={faGithub} className='text-gray-600 hover:text-white'/><span className='pl-3'>Dasboard</span></div>
                            <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white'><FontAwesomeIcon icon={faFacebook} className='text-gray-600'/><span className='pl-3'>Dasboard</span></div>
                            <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white'><FontAwesomeIcon icon={faLinkedin} className='text-gray-600'/><span className='pl-3'>Dasboard</span></div>
                        </div>

                        
                        <div className='pb-1 cursor-pointer'>
                         <div className='nav-title flex items-center justify-between w-full bg-gray-200 px-3 py-2'>
                                <span className='text-blue-400 hover:bg-blue-500  border-b border-blue-500 uppercase'>Page</span>
                                {/* <FontAwesomeIcon icon={faArrowDownWideShort} /> */}
                                <FontAwesomeIcon icon={faChevronDown} className='text-lg text-gray-400'/>
                            </div>
                           <span className='text-blue-400 border-b border-blue-400 uppercase'></span>
                            <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white'><FontAwesomeIcon icon={faGoogle} className='text-gray-600'/><span className='pl-3'>Dasboard</span></div>
                            <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white'><FontAwesomeIcon icon={faTwitter} className='text-gray-600'/><span className='pl-3'>Dasboard</span></div>
                            <div className='px-8 py-3 hover:bg-blue-500  transition duration-500 hover:text-white'><FontAwesomeIcon icon={faApple} className='text-gray-600'/><span className='pl-3'>Dasboard</span></div>
                       </div>
                        <div className='flex-grow'></div>
                        <div className='p-3 flex gap-3 items-center font-bold text-2xl text-white 
                        hover:transition duration-1000 hover:text-white justify-between px-10 pb-4'>
                            <FontAwesomeIcon icon={faPowerOff} className='text-red-400 cursor-pointer'/>
                             <FontAwesomeIcon icon={faMoon} className='text-black cursor-pointer'/>
                            
                            </div>
                </div>
                {/* <div className='dashboard-main-col-right bg-red-200 h-screen w-[86vw]'>
                    <div className='h-full w-[50vw] bg-slate-500 items-center'>

                    </div>
                </div> */}

                 <div className='dashboard-main-col-right bg-white h-screen w-[86vw] flex justify-center items-center'>
                    <div className='h-full w-[80vw] bg-slate-100'>
                      <div className='h-[5vh] flex '>
            <div className='flex w-[5vw] '>
                <select name="lan" id="lang" className="w-full">
                    <option value="volvo">English</option>
                    <option value="saab">Bangla</option>
                </select>
            </div>
            <div className='w-[60vw] border-x-2 border-gray-300'>
                <input 
                    type='text' 
                    placeholder='Search....' 
                    className="w-full h-full border border-blue-500 outline-none px-2 py-1 rounded"
                />
            </div>
            <div className='top-header-icons w-[16vw] flex items-center gap-4 justify-between'>
                <div className='flex justify-center items-center gap-2 pl-2 text-xs'>
                        <img src={Profile} alt="Logo" className="w-10 h-10 rounded-full object-cover" /> {/* Adjust width and height accordingly */}
                        <div className='flex flex-col text-gray-300'>
                            <span>Mr.Mainul</span>
                            <span>Admin</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} className='text-gray-400'/>
                 </div>
                <div className='flex gap-7 text-xl text-gray-100 items-end pr-4'>
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faMessage} />
                    {/* <FontAwesomeIcon icon={faToggleOff} /> */}
                    <FontAwesomeIcon icon={faToggleOn} />
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default LandingPage;
