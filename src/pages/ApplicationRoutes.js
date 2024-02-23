import React, { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import axios from 'axios'
import { R_ALL_APP_ROUTES, C_APP_ROUTES } from '../api/auth'
import moment from 'moment';

const ApplicationRoutes = () => {
  const [appRoutes, setAppRoutes] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isOpenViewModal, setIsOpenViewModal] = useState(false)
  const [applicationName, setApplicationName] = useState('')
  const [applicationModuleName, setApplicationModuleName] = useState('')
  const [routeTitle, setRouteTitle] = useState('')
  const [path, setPath] = useState('')
  const [element, setElement] = useState('')
  const [routeType, setRouteType] = useState('')
  const [selectedRoute, setSelectedRoute] = useState(null)

  const status = true


  // Modal Handler
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const handleOpenViewModal = ({ appRoute }) => {
    setSelectedRoute(appRoute);
    setIsOpenViewModal(true)
  }
  const handleCloseViewModal = () => {
    setSelectedRoute(null);
    setIsOpenViewModal(false)
  }


  // Fetch Data From Database
  const fetchApplicationRoutes = async () => {
    try {
      const res = await axios.get(R_ALL_APP_ROUTES)
      setAppRoutes(res.data.data)
    } catch (error) {
      console.log('Something Went Wrong. Please Wait for sometime and Try again');
    }
  }

  useEffect(() => {
    fetchApplicationRoutes()
  }, [])

  // Save DATA IN THE DATABASE
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(C_APP_ROUTES, {
        applicationName,
        applicationModuleName,
        routeTitle,
        path,
        element,
        routeType,
        status
      })
      fetchApplicationRoutes()
    } catch (error) {
      console.log('Something Went Wrong.Please Wait for sometime and Try again');
    }
  }

  // Render signin page content
  return (
    <>
      <Navbar />

      <div onClick={handleOpenModal} className='text-center text-purple-500 cursor-pointer '>Add</div>

      {/* ********************************************************* MODAL FORM START *****************************************************/}
      <div className={`fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-70  ${isModalOpen ? 'block' : 'hidden'}`}></div >

      <div className={`absolute ${isModalOpen ? 'top-1/2' : 'invisible'} left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      bg-gray-100 w-80 p-4 md:w-10/12 md:p-8  lg:w-96 lg:p-8 rounded-lg`} style={{ zIndex: 999 }}>
        <div className='font-bold  absolute top-2 right-2 w-6 h-6 bg-orange-500 text-white text-center 
        leading-6 rounded-full cursor-pointer hover:bg-red-600' onClick={handleCloseModal}>&times;</div>
        <form onSubmit={handleSubmit}>
          <div className='input-details text-gray-500 '>

            <div className='input-box  flex flex-col'>
              <label className='font-medium mb-1'>Application Name</label>
              <input
                type='text'
                placeholder='Enter your Application Name'
                className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400'
                onChange={(e) => setApplicationName(e.target.value)}
              />
            </div>

            <div className='input-box  flex flex-col mt-2'>
              <label className='font-medium mb-1'>Module</label>
              <input
                type='text'
                placeholder='Enter your Application Name'
                className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400'
                onChange={(e) => setApplicationModuleName(e.target.value)}
              />
            </div>

            <div className='input-box  flex flex-col mt-2'>
              <label className='font-medium mb-1'>Title</label>
              <input
                type='text'
                placeholder='Enter your Title'
                className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400'
                onChange={(e) => setRouteTitle(e.target.value)}
              />

            </div>


            <div className='input-box  flex flex-col mt-2'>
              <label className='font-medium mb-1'>Path</label>
              <input
                type='text'
                placeholder='Enter your Module Name'
                className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400'
                onChange={(e) => setPath(e.target.value)}
              />
            </div>


            <div className='input-box  flex flex-col mt-2'>
              <label className='font-medium mb-1'>React Element Name</label>
              <input
                type='text'
                placeholder='Enter your username'
                className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400'
                onChange={(e) => setElement(e.target.value)}
              />
            </div>

            <div className='my-2'>
              <label className='font-medium mb-2'>Type</label>
              <div className='input-box  flex flex-col relative mt-1' >
                <select class="p-2 outline-none border-2 rounded-md appearance-none pr-8 bg-white" onChange={(e) => setRouteType(e.target.value)}>
                  <option value="">Select an Option</option>
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              type='button'
              className='w-3/12 bg-orange-600 p-1 text-white rounded-md shadow-sm   mt-2 hover:bg-orange-500'
              onClick={handleCloseModal}
            >Cancel</button>
            <button
              type='submit'
              className='w-3/12 bg-green-600 p-1 text-white rounded-md shadow-sm   mt-2 hover:bg-green-500'
            >Submit</button>
          </div>
        </form>
      </div >



      {/* ********************************************************* MODAL FORM END **********************************************************/}


      {/* VIEW MODAL START */}
      <div className={`fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-70  ${isOpenViewModal ? 'block' : 'hidden'}`}></div >
      <div className={`absolute ${isOpenViewModal ? 'top-1/2' : 'invisible'} left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  bg-gray-100 w-80 p-4 md:w-10/12 md:p-8  lg:w-96 lg:p-8 rounded-lg`} style={{ zIndex: 999 }}>
        <div className='font-bold  absolute top-2 right-2 w-6 h-6 bg-orange-500 text-white text-center 
    leading-6 rounded-full cursor-pointer hover:bg-red-600' onClick={handleCloseViewModal}>&times;</div>
        {selectedRoute && isOpenViewModal && (
          <div>
            <h1 className='tex-lg text-purple-500 py-2 text-center border-b-2'>View Data</h1>
            <div className='mt-4'>
              <p>Module: {selectedRoute.applicationModuleName}</p>
              <p>Path: {selectedRoute.path}</p>
              <p>Element: {selectedRoute.element}</p>
              <p>Type: {selectedRoute.routeType}</p>
            </div>
          </div>
        )}
      </div >
      {/* VIEW MODAL END */}

      {/* TABLE START */}
      <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 md:">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-100 shadow-dashboard px-8 py-4 md:">
          <table className="min-w-full border-t-2 md:">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left  leading-4 text-blue-500 tracking-wider">Module</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left  leading-4 text-blue-500 tracking-wider">Path</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left  leading-4 text-blue-500 tracking-wider">Element</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left  leading-4 text-blue-500 tracking-wider">Type</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left  leading-4 text-blue-500 tracking-wider">Status</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left  leading-4 text-blue-500 tracking-wider">Created At</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-blue-500 tracking-wider text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {appRoutes.map((appRoute, index) => (
                <tr key={index} className={appRoute.routeType === 'private' ? 'bg-red-200' : 'bg-white'}>
                  <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-500">
                    <div className="flex items-center">
                      <div>
                        <div className=" leading-5 text-gray-800"># {index + 1}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-500">
                    <div className=" leading-5 text-blue-900">{appRoute.applicationModuleName}</div>
                  </td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-500">
                    <div className="leading-5 text-blue-900">{appRoute.path}</div>
                  </td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 leading-5">{appRoute.element}</td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 leading-5">
                    {appRoute.routeType === 'public' ?
                      (
                        <span className="rounded bg-green-400 py-2 px-3  font-bold text-gray-700 cursor-pointer">Public</span>
                      ) : (
                        <span className="rounded bg-red-400 py-2 px-3 font-bold text-gray-700 cursor-pointer">Private</span>
                      )}
                  </td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 leading-5">
                    {appRoute.status === true ?
                      (
                        <span className="relative inline-block px-3 py-2 font-semibold text-green-900 leading-tight">
                          <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                          <span className="relative cursor-pointer">active</span>
                        </span>
                      ) : (
                        <span className="relative inline-block px-3 py-2 font-semibold text-red-900 leading-tight">
                          <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                          <span className="relative cursor-pointer">not active</span>
                        </span>
                      )}
                  </td>
                  <td className="py-2 whitespace-no-wrap border-b border-gray-500 text-blue-900 
                  leading-5">{moment(appRoute.createdAt).format('DD MMMM YYYY')}</td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 leading-5 ">
                    <button className="px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300
                    hover:bg-blue-700 hover:text-white focus:outline-none" onClick={() => handleOpenViewModal({ appRoute })}>View Details</button>
                    <button className="px-2 py-2 border-green-500 border text-green-500 rounded transition duration-300 
                    hover:bg-green-700 hover:text-white focus:outline-none ml-2">Update</button>
                    <button className="px-2 py-2 border-red-500 border text-red-500 rounded transition duration-300 
                    hover:bg-red-700 hover:text-white focus:outline-none ml-2">Disable</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* TABLE START */}


    </>
  )
}
export default ApplicationRoutes
