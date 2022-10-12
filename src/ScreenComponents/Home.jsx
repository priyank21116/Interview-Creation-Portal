import React,{useState} from 'react'
import axios from 'axios'
import ListItem from '../utility/ListItem'
import { useEffect } from 'react'

const Home = () => { 

   const [interviewss,setinterviewss] = useState([]) 
   const [flag,setFlag]= useState(false)
   

   const deleteinterview=(iid)=>{    
    axios.delete(`http://localhost:5000/api/${iid}`).then(res => {setFlag(!flag)})
   }
  
  //  const fetch=async()=>{
  //   await axios.({
  //     method: 'GET',
  //     url:'http://localhost:5000/api',
  //     header:{
  //       "Content-Type": "application/json"
  //     }
  //   }).then(res => (setinterviewss(res)))
  //  }
  

   useEffect(()=>{
    axios.get('http://localhost:5000/api').then(res =>{
      console.log("::::::",res)
      setinterviewss(res.data)
      
    })
   },[flag])

   const items =[
    {
        "_id": "634656f8e8a1690093fc85bb",
        "participants": [
            {
                "_id": "6345b7e2335f16261801f97a",
                "name": "Abhijeet",
                "email": "abhijeet@gmail.com",
                "appliedfor": "Human Resource Internship"
            },
            {
                "_id": "6345bf32ed875bbc928d34f3",
                "name": "Gaurang verma",
                "email": "gaurang@gmail.com",
                "appliedfor": "Software developermenmt engineer"
            },
            {
                "_id": "6345be86ed875bbc928d34ef",
                "name": "Kanika",
                "email": "kanika@gmail.com",
                "position": "Product Manager"
            }
        ],
        "stime": "2022-10-12T09:04:45.904Z",
        "etime": "2022-10-12T10:04:45.904Z",
        "discription": "Software Development Engineer Role",
        "__v": 0
    }
]

 

  return (
    <div className='mt-8 mx-4 ml-8 h-screen overflow-auto'>
     {  interviewss.map((obj,index)=>{

      return(
       < ListItem 
       key={index}
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