import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignUp';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<UserSignUp />} />
      <Route path='/about' element={ <UserLogin />} />
      <Route path='/sign' element={ <UserSignUp />} />
      <Route path='/cap-login' element={ <CaptainLogin />} />
      <Route path='/cap-sign' element={ <CaptainSignUp/>} />
      <Route path='/navbar' element={<Navbar />} />
    </Routes>
  );
}

export default App;
