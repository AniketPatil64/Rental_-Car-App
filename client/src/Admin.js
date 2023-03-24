import React from 'react'
import AdminPage from "./components/Adminpage/AdminPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCar from './components/AddCar/AddCar';
import EditCar from './components/EditCar/EditCar';

function Admin() {
  return (
    <BrowserRouter className='app-div'>
    <Routes>
      <Route path='/adminPage' element={<AdminPage/>}/>
      <Route path='/addcar' element={<AddCar/>}/>
      <Route path='/editcar' element={<EditCar/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Admin
