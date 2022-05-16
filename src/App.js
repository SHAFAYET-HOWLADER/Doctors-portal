
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/AppointmentNav';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Review from './Pages/Review/Review';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointment />}></Route>
          <Route path='review' element={<Review />}></Route>
        </Route>
        <Route path='/reviews' element={<Review />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/contactUs' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
