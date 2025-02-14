/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const Tabs = ({ tab, setTab }) => {
    
    const {dispatch} = useContext(authContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
    }

  return (
      <div>
          <span className='lg:hidden'>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
          </span>
          <div className="hidden lg:flex flex-col px-10 py-5 bg-white shadow-panelShadow items-center h-max rounded-md">
              <button
                  onClick={() => setTab('overview')}
                  className={`
                  ${tab === 'overview'
                          ? "bg-indigo-100 text-primaryColor"
                          : "bg-transparent text-headingColor"
                      } 
                      w-[15vw] btn mt-0 rounded-md`
                  }>
                  Overview
              </button>
              
              <button
                  onClick={() => setTab('appointments')}
                  className={`${tab === 'appointments'
                      ? "bg-indigo-100 text-primaryColor"
                      : "bg-transparent text-headingColor"
                      } 
                      w-[15vw] btn mt-0 rounded-md`
                  }>
                  Appointments
              </button>
              
              <button
                  onClick={() => setTab('settings')}
                  className={`${tab === 'settings' 
                  ? "bg-indigo-100 text-primaryColor" 
                  : "bg-transparent text-headingColor"

                  } 
                  w-[15vw] btn mt-0 rounded-md`
                  }>
                    Profile
              </button>
              
              <div className='mt-[100px] w-full'>
                        <button onClick={handleLogout} className='w-full bg-[#181a1e] p-3 text-[16px] leading-7 rounded-md text-white'>Logout</button>
                        <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md'>Delete account</button>
                    </div>
          </div>
    </div>
  )
}

export default Tabs