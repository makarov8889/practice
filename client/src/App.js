import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Admin, Resource } from "react-admin"
// import restPorvider from "ra-data-simple-rest"

import Navbar from './components/navbar/Navbar.jsx';

import Home from './pages/home/Home.jsx';
import LogIn from './pages/logIn/LogIn.jsx';
import Registration from './pages/registration/Registration.jsx';
import Profile from './pages/profile/Profile.jsx';
import Admin from './pages/admin/Admin.jsx';

function App() {
  return (
    <BrowserRouter>

    {/* Участок для шаблонизации всего сайта */}
    <Navbar />
    <a href='/'> Главная </a> <br/>
    <a href='/logIn'> LogIn </a> <br/>
    <a href='/registration'> Registration </a> <br/>
    <a href='/profile'> Профиль </a> <br/>
    <a href='/admin'> Админка </a>

      {/* Прописаные пути для каждого роута для всего сайта */}
      <Routes>
        <Route path='/' Component={ Home }/>
        <Route path='/logIn' Component={ LogIn }/>
        <Route path='/registration' Component={ Registration }/>
        <Route path='/profile' Component={ Profile }/>
        <Route path='/admin' Component={ Admin }/>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;