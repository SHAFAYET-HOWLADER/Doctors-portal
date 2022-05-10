
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Review from './Pages/Review/Review';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/appointment' element={<Appointment/>}></Route>
                <Route path='/reviews' element={<Review/>}></Route>
                <Route path='/contactUs' element={<Contact/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
    </div>
  );
}

export default App;
