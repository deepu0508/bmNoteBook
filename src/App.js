import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';
import Login from './Components/Login';
import Sign from './Components/Sign';
import { useEffect, useState } from 'react';
import Alert from './Components/Alert';
import AddNotes from './Components/AddNotes';
import Contact from './Components/Contact';
// import TestWork from './Components/TestWork';

function App() {
  const [alert, setAlert] = useState({ type: "", mess: "" })
  const showAlert = (type, mess) => {
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    setAlert({ type, mess });
  }

  // useEffect(()=>console.clear())
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <div className="bgcontainer" ></div>
          <div className="df">
            <div className="df bgContainer" >
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact showAlert={showAlert}/>} />
                <Route exact path='/addNote' element={<AddNotes showAlert={showAlert} />} />
                <Route exact path='/login' element={<Login showAlert={showAlert} />} />
                <Route exact path='/signup' element={<Sign showAlert={showAlert} />} />
                {/* <Route exact path='/testwork' element={<TestWork />} /> */}
              </Routes>
            </div>
          </div>
          <Navbar />
          <div className="df alert">
            <Alert alert={alert} />
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
