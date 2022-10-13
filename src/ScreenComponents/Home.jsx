import React,{useState} from 'react'
import axios from 'axios'
import ListItem from '../utility/ListItem'
import { useEffect } from 'react'

const Home = () => { 

   const [interviewss,setinterviewss] = useState([]) 
   const [flag,setFlag]= useState(false)
   
   let baseapi =`https://interviewportalprk.herokuapp.com`

   const deleteinterview=(iid)=>{    
    axios.delete(`${baseapi}/api/${iid}`)
    .then((r)=>{setFlag(!flag) ; alert(r.data.message);})
    .catch((err)=>{alert(err.response.data.message)})
   }
  
  //  const fetch=async()=>{
  //   await axios.({
  //     method: 'GET',
  //     url:'${baseapi}/api',
  //     header:{
  //       "Content-Type": "application/json"
  //     }
  //   }).then(res => (setinterviewss(res)))
  //  }
  

   useEffect(()=>{
    axios.get(`${baseapi}/api`).then(res =>{
      console.log("::::::",res)
      setinterviewss(res.data)
      
    })
   },[flag])



 

  return (
    <div className='mt-8 mx-4 ml-8 h-screen overflow-auto'>
     {  interviewss.map((obj,index)=>{

      return(
       < ListItem 
       key={obj._id}
       index={index} 
       item= {obj} 
       deleteinterview={deleteinterview}
      
       />
      )
     })}

    </div>
  )
}

export default Home