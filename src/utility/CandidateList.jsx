import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const CandidateList = ({flag,addinlist}) => {
  let baseapi =`https://interviewportalprk.herokuapp.com`

  const [data,setdata] = useState([])
  // const [selected,setselected] =useState(false) 
  let api = flag==="candidate"?` ${baseapi}/cd/list` : `${baseapi}/in/list`;
  // let tag = flag ==="candidate"?'cdList' : 'intList'

useEffect(()=>{
  axios.get(api).then(res =>{
    // console.log("::::::",res)
    flag ==="candidate" ?setdata(res.data.cdList)  : setdata(res.data.intList)
  })
 },[]) 


  return (
    <div className=' border-3 border-black h-[380px] w-full justify-center items-center shadow '>
 
    <div className='justify-center items-center w-4/5 h-5/6 mt-8 border-2 border-blue-400 shadow-2xl shadow-inner rounded bg-blue-50  mx-auto candidateitem overflow-auto'>
  
    {/* item */}

    {data && data.map((item,index)=>(<div key={item._id}  onClick={()=>{  addinlist(item) ;}}>
      
      <div className='bg-white my-2 mx-2 py-2 border-gray-200 border-2 rounded-xl px-4 active:bg-blue-100 active:border-2 active:border-blue-400'>
      
       <h3 className='text-gray-700'>{item.name}</h3>
       <div className=' text-gray-500 flex justify-between'>
       <p>{item.appliedfor ? item.appliedfor : item.position} </p>
       <p className=''>{item.email}</p>
       </div>
   
     </div>
    
     </div>
     )

)}
    </div>
    </div>
  )
}

export default CandidateList