import React from 'react'
import CandidateList from '../utility/CandidateList';

const ScheduleInterview = () => {
   const candidates={
      name:'Pruyank Gupta',
      email:'prkgupta@gmail.com',
      role: 'Software engeneer'
    }
  return (
    <>
    <div className='overflow-auto'>

    <div className='bg-red-200 h-3/5 w-auto'>
        <div className='grid md:grid-cols-2 '>
          <CandidateList list={candidates}/>
           <CandidateList list={candidates}/>
        </div>
      </div>


      <div className='grid md:grid-cols-3 gap-5 mt-10 mx-20'>
        <div className='entries  border-2 border-black'>
        <p>Interview Date</p>
        <input type={'date'} placeholder='Date' ></input>
        </div>

        <div  className='entries w-full h-full border-2 border-black'>
        <p >Start time</p>
        <input type={'time'} placeholder='start' ></input>
        </div>

        <div  className='entries w-full h-full border-2 border-black'>
        <p>End Time</p>
        <input type={'time'} placeholder='end' ></input>
        </div>
      </div>

      <div className=' grid grid-cols-3 gap-5 mt-10 mx-20'>
     
     <div className='col-span-2 border-2 border-black'>

     </div>
     <div>
      <button className='active'> Schedule Interview</button>
     </div>

    </div>
   



    </div>
    </>
  )
}

export default ScheduleInterview