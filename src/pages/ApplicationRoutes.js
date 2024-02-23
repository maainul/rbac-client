import React, { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import axios from 'axios'
import { R_ALL_APP_ROUTES } from '../api/auth'
import moment from 'moment';

const ApplicationRoutes = () => {

  const [appRoutes, setAppRoutes] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [applicationName, setApplicationName] = useState('')
  const [applicationModuleName, setApplicationModuleName] = useState('')
  const [routeTitle, setRouteTitle] = useState('')
  const [path, setPath] = useState('')
  const [element, setElement] = useState('')
  const [routeType, setRouteType] = useState('')
  const [status, setStatus] = useState(false)


  useEffect(() => {
    const fetchApplicationRoutes = async () => {
      try {
        const res = await axios.get(R_ALL_APP_ROUTES)
        setAppRoutes(res.data.data)
      } catch (error) {
        console.log('Something Went Wrong. Please Wait for sometime and Try again');
      }
    }
    fetchApplicationRoutes()
  }, [])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // Render signin page content
  return (
    <>
      <Navbar />

      <div onClick={handleOpenModal}>Add</div>

      {/* ********************************************************* MODAL FORM START *****************************************************/}
      <div className={`fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-40  ${isModalOpen ? 'block' : 'hidden'}`}></div >
      <div className={`absolute ${isModalOpen ? 'top-1/2' : 'invisible'} left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      bg-gray-100 w-80 p-4 md:w-10/12 md:p-8  lg:w-96 lg:p-8 rounded-lg`}>
        <div className='font-bold text-lg absolute top-2 right-2 w-6 h-6 bg-orange-500 text-white text-center 
        leading-6 rounded-full cursor-pointer hover:bg-red-600' onClick={handleCloseModal}>&times;</div>
        <form >
          <div className='input-details text-gray-500 text-sm md:text-sm'>
            <div className='input-box  flex flex-col'>
              <label className='font-medium mb-1'>Module</label>
              <input
                type='text'
                placeholder='Enter your username'
                className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400'
              />

            </div>
            <div className='input-box  flex flex-col mt-2'>
              <label className='font-medium mb-1'>Path</label>
              <input
                type='text'
                placeholder='Enter your username'
                className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400'
              />

            </div>
            <div className='input-box  flex flex-col mt-2'>
              <label className='font-medium mb-1'>React Element Name</label>
              <input
                type='text'
                placeholder='Enter your username'
                className='border border-slate-300 rounded-md shadow-sm placeholder-slate-400 p-2 focus:outline-none focus:border-sky-400'
              />
            </div>
            <div className='my-2'>
              <label className='font-medium mb-2'>Type</label>
              <div className='input-box  flex flex-col relative mt-1' >
                <select class="p-2 outline-none border-2 rounded-md appearance-none pr-8 bg-white">
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
              className='w-3/12 bg-orange-600 p-1 text-white rounded-md shadow-sm text-sm md:text-sm mt-2 hover:bg-orange-500'
            >Cancel</button>
            <button
              type="submit"
              className='w-3/12 bg-green-600 p-1 text-white rounded-md shadow-sm text-sm md:text-sm mt-2 hover:bg-green-500'
            >Submit</button>
          </div>
        </form>
      </div >

      {/* ********************************************************* MODAL FORM END **********************************************************/}

      <div className="my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">


        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-100 shadow-dashboard px-8 py-4 ">
          <table className="min-w-full border-t-2">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Module</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Path</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Element</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Type</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                <th className="py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created At</th>
                <th className="py-3 border-b-2 border-gray-300 text-blue-500 tracking-wider text-center text-sm ">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {appRoutes.map((appRoute, index) => (
                <tr key={index} className={appRoute.routeType === 'private' ? 'bg-red-200' : 'bg-white'}>
                  <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-500">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm leading-5 text-gray-800"># {index + 1}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-500">
                    <div className="text-sm leading-5 text-blue-900">{appRoute.applicationModuleName}</div>
                  </td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-500">
                    <div className="text-sm leading-5 text-blue-900">{appRoute.path}</div>
                  </td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{appRoute.element}</td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {appRoute.routeType === 'public' ?
                      (
                        <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">Public</span>
                      ) : (
                        <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">Private</span>
                      )}
                  </td>
                  <td className="px-6 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {appRoute.status === true ?
                      (
                        <span className="relative inline-block px-3 py-2 font-semibold text-green-900 leading-tight">
                          <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                          <span className="relative text-xs">active</span>
                        </span>
                      ) : (
                        <span className="relative inline-block px-3 py-2 font-semibold text-red-900 leading-tight">
                          <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                          <span className="relative text-xs">not active</span>
                        </span>
                      )}
                  </td>
                  <td className="py-2 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm 
                  leading-5">{moment(appRoute.createdAt).format('DD MMMM YYYY')}</td>
                  <td className="py-2 whitespace-no-wrap text-center border-b border-gray-500 text-sm leading-5 flex justify-center gap-4">
                    <button className="px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 
                    hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                    <button className="px-2 py-2 border-green-500 border text-green-500 rounded transition duration-300 
                    hover:bg-green-700 hover:text-white focus:outline-none">Update</button>
                    <button className="px-2 py-2 border-red-500 border text-red-500 rounded transition duration-300 
                    hover:bg-red-700 hover:text-white focus:outline-none">Disable</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}
export default ApplicationRoutes
