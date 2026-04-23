import { useState } from 'react';
import {BrowserRouter, Routes, Route, Router, Navigate} from 'react-router-dom';
import LoginPage from './pages/LoginPage';

import './App.css'
import Register from './components/Register/Register';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route key="login" path='/login' element={<LoginPage/>} />
      <Route key="register" path='/register' element = {<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App