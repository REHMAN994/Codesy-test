import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import './App.css';

function App() {

  const [calendar, setcalendar] = useState([]);
  const [datetime, setdatetime] = useState([]);
  const [reason, setreason] = useState([]);

  useEffect( () => {
     axios
      .get("https://private-37dacc-cfcalendar.apiary-mock.com/mentors/1/agenda")
      .then((res) => {
        setcalendar(res.data.calendar);
      });
  }, []);

  const handleDocType = async (e) => {
    setdatetime( e.target.value);
  }

  const handleReason = async (e) => {
    setreason( e.target.value);
  }
  const btn = (e) => {
    Swal.fire(datetime, reason);
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row" >
            <div className="col-md-10 col-lg-10">
              <section id="card">
                <div className="well">
                  <h1> </h1>
                  <div className="inner-card">
                    <form className="ml-auto" method="post">
                      <div style={{ display: 'flex' }}>
                        <div >
                          <label>Choose Course</label>
                          <br />
                          <select onChange={handleDocType} style={{ width: '15rem', float:'left', fontSize:'large',borderColor: '#D5D7E7',backgroundColor: '#F3F3F6', }}>
                            <option value="">Select Date</option>
                          {calendar.map((item, index) => (
                            <option key={index} value={item.date_time}>
                              {item.date_time}
                            </option>
                          ))}

                          </select>
                          <br />
                          <textarea onChange={handleReason}  id="w3review" name="w3review" rows="4" type="text" placeholder=" Reason here.." style={{ height: '5rem' }}></textarea>
                        </div>
                      </div>

                    </form>

                  </div>
                  <div className="button">
                    <button onClick={btn} type="button" className="btn  btn-md btn-save">Confirm</button>

                  </div>
                </div>
              </section>
            </div>
            </div>
        </div>
      </header>
    </div>
  ); 
}

export default App;
