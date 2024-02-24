import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';
// import TestWork from './Components/TestWork';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            {/* <Route exact path='/testwork' element={<TestWork />} /> */}
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
