//import Admin from './Admin';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Header from './components/Header/Header';


function App() {
  return (
    // <Admin/>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
