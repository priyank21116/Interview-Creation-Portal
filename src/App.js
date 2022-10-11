

import Navbar from './utility/Navbar';
function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      {/* Select  */}
      <div className='mx-auto justify-center flex'>
        <button className='m-5 p-6 bg-orange-600'>Home</button>
        <button>Schedule</button>
      </div>
      {/* <h1 className='text-xl'>Hello ji</h1> */}
    </div>
  );
}

export default App;
