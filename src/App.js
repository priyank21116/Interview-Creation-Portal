import './index.css'
import { useState } from 'react';
import Navbar from './utility/Navbar';
import ScheduleInterview from './ScreenComponents/ScheduleInterview';
import Footer from './utility/Footer';
import Home from './ScreenComponents/Home';
function App() {


  const [task,settask]=useState('schedule');


  return (
    <div className="w-full h-full appbackground" style={{backgroundColor:''}}>
      
      <Navbar />

      <div className='mx-auto h-screen max-w-[1000px] justify-center border-2 border-gray-200 bg-white rounded-3xl shadow-2xl shadow-inner mt-7 overflow-hidden'>

      <div className='h-auto w-full overflow-hidden -m-0 -p-0'>
          <div className='grid grid-cols-2 overflow-hidden h-12 '>
              <div className={task==='schedule'?'deactive':'active'} onClick={()=> (console.log('Home'))}>Fixed Intrview</div>
              <div className={task==='schedule'? `active` : `deactive`} onClick={()=>console.log('Interview')}>Schedule Interview</div>
          </div>

          {/* <ScheduleInterview /> */}
          <Home />
        </div>

      </div>


      <Footer />

    </div>
  );
}

export default App;
