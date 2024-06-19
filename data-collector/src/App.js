import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formEle = e.target;
  //   const formData = new FormData(formEle);

  //   fetch("https://script.google.com/macros/s/AKfycbwrJMbF1FuFCOUOUmat6Khet2LYvHz5SCpexWzlHjhKISS8N-BZeSUwXgtu4pauD3YriQ/exec", {
  //     method: "POST",
  //     mode: "cors",
  //     body: formData
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:', data);
  //     // Optionally, handle success feedback
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //     // Optionally, handle error feedback
  //   });
  // }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(name,gps, date)
    const data = {
      Name: name,
      Gps: gps,
      Date: date
    }
    axios.post('https://sheet.best/api/sheets/521a7ea2-69f8-4311-a324-f0d9fdc8987d', data).then((response)=>{
      console.log(response);
      
      // clearing form fields
      setName('');
      setGps('');
      setDate('')
    })
  }

  const [name, setName] = useState("");
  const [gps, setGps] = useState("");
  const [date, setDate] = useState("");



  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <div className="mb-4 text-white">GPS DATA COLLECTOR</div>
        <div className="mb-4">
          <button
            className="pl-4 pr-4 bg-green-500 rounded-md"
            // onClick={toggleVisibility}
          >
            Toggle Form
          </button>
        </div>
      
        <form className="w-[500px] border-4 border-solid p-4 form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <div>
              <label className="task-form-label mr-4 text-white" htmlFor="name-input">
                Applicant's Name
              </label>
            </div>
            <input
              required
              type="text"
              id="name-input"
              className="form-input"
              onChange={(e)=>setName(e.target.value)} value={name}
            />
          </div>
          <div className="mb-4">
            <div>
              <label className="task-form-label mr-4 text-white" htmlFor="gps-input">
                GPS
              </label>
            </div>
            <input
              required
              type="text"
              id="gps-input"
              className="form-input" 
              onChange={(e)=>setGps(e.target.value)} value={gps}
            />
          </div>
          <div className="mb-4">
            <div>
              <label className="task-form-label mr-4 text-white" htmlFor="date-input">
                Date
              </label>
            </div>
            <input
              type="date"
              id="date-input"
              className="form-input"
              onChange={(e)=>setDate(e.target.value)} value={date}
            />
          </div>
          <button type="submit" className="pl-4 pr-4 bg-blue-500 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
