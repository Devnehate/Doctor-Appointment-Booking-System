/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import useFetchData from '../../Hooks/useFetchData.jsx';
import { BASE_URL } from '../../../config.js';
import DoctorCard from '../../Components/Doctors/DoctorCard.jsx';
import Loading from '../../Components/Loader/Loading.jsx';
import Error from '../../Components/Error/Error.jsx';

const MyBookings = () => {
  const {data:appointments, loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
      {loading && !error && <Loading />}
                
      {error && !loading && <Error errMessage={error} />}
      
      {!loading && !error &&
        (<div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
          appointments.map(doctor => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
        )}
      {
        !loading && !error && appointments.length === 0 && <h2 className='mt-5 text-center kea7
         text-[20px] font-semibold text-primaryColor'>You did not book yet!</h2>
      }
    </div>
  )
}

export default MyBookings