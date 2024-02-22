import React, { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import axios from 'axios'
import { R_ALL_APP_ROUTES } from '../api/auth'
import moment from 'moment';

const ApplicationRoutes = () => {

    const[appRoutes,setAppRoutes] = useState([])

    useEffect(()=>{
        const fetchApplicationRoutes = async () =>{
            try {
                const res = await axios.get(R_ALL_APP_ROUTES)
                setAppRoutes(res.data.data)
            } catch (error) {
                console.log('Something Went Wrong. Please Wait for sometime and Try again');
            }
        }
        fetchApplicationRoutes()
    },[])

    // Render signin page content
    return (
        <>
        <Navbar/>

      <div className='rounded bg-green-400 font-bold w-20 text-center h-8 flex justify-center align-middle text-lg text-gray-100 mt-2'>Add</div>

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

        {appRoutes.map((appRoute,index) =>(
        <tr  key={index} className={appRoute.routeType === 'private'? 'bg-red-200' : 'bg-white'}>
          <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-500">
            <div className="flex items-center">
              <div>
                <div className="text-sm leading-5 text-gray-800"># {index+1}</div>
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
          <td className="py-2 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{moment(appRoute.createdAt).format('DD MMMM YYYY')}</td>
          <td className="py-2 whitespace-no-wrap text-center border-b border-gray-500 text-sm leading-5 flex justify-center gap-4">
            <button className="px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
            <button className="px-2 py-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none">Update</button>
            <button className="px-2 py-2 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">Disable</button>
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
