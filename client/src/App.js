//import Admin from './Admin';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Header from './components/Header/Header';
import AddCar from './components/AddCar/AddCar';
import EditCar from './components/EditCar/EditCar';
import CarBooking from './components/Carbookings/CarBooking';
import AdminPage from './components/Adminpage/AdminPage';

function App() {
  return (
    // <Admin/>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/adminlogin' element={<AdminLogin />}/>
        <Route path='/adminregister' element={<Adminregister/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/adminPage' element={<AdminPage/>}/>
        <Route path='/addcar' element={<AddCar/>}/>
        <Route path='/editcar' element={<EditCar/>}/>
        <Route path='/bookingcar' element={<CarBooking/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
