import React from 'react'

const ListItem = (index,{candidates,interviewer,stime,etime,date,role}) => {
  return (
    <div className=' grid grid-cols-3 gap-5 border-2 bg-slate-100 my-4 border-blue-600  rounded-lg'>
      <div className='col-span-2 '>
           <h3>{`Interview ${index}`}</h3>
      <h4>{`Candidate : ${candidates}`}</h4>
      <h4>{`interviewer : ${interviewer}`}</h4>
      <p> {`Time : ${stime} - ${etime} `}</p>
      <p> {`Date : ${date}`}</p>
      <h6>{`ROle : ${role}`}</h6> 
      </div>
      <div className='flex-cols grid '>
         <button className='bg-red-400 my-7 mx-5'>Delete Interview</button>
         <button className='bg-green-500 my-7 mx-5'>Update Interview</button>
      </div>
    </div>
  )
}

export default ListItem