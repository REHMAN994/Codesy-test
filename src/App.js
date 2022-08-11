
import './App.css';

function App() {
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
                          <select style={{ width: '15rem', float:'left', fontSize:'large',borderColor: '#D5D7E7',backgroundColor: '#F3F3F6', }}>
                            <option value={""}>Dates </option>

                          </select>
                          <br />
                          <textarea  id="w3review" name="w3review" rows="4" type="text" placeholder=" Description here.." style={{ height: '5rem' }}></textarea>
                        </div>
                      </div>

                    </form>

                  </div>
                  <div className="button">
                    <button type="button" className="btn  btn-md btn-save">Confirm</button>

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
