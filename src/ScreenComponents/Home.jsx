import React from 'react'
import ListItem from '../utility/ListItem'
const 
Home = () => {
   const deleteinterview=()=>{}
   const updateinterview=()=>{}

   const interview ={
      candidates:['Priyank','Somesh'],
      interviewer:'Mangya',
      stime:'12:28',
      etime:'14:30',
      date:'12-10-22',
      role:'Software engineer'
   }

  return (
    <div className='mt-8 mx-4 ml-8 h-screen overflow-auto'>
      <ListItem index='1' interviews= {interview} />
      <ListItem index='1' interviews= {interview} />

      <ListItem index='1' interviews= {interview} />

      <ListItem index='1' interviews= {interview} />

      <ListItem index='1' interviews= {interview} />
      <ListItem index='1' interviews= {interview} />

    </div>
  )
}

export default 
Home