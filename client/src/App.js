import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';

import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from './utils/consts.js';
import AppRouter from './components/AppRouter.js';

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Участок для шаблонизации всего сайта */}
      <Navbar />
      {/* <a href={MAIN_ROUTE}>Главная</a> <br/>
      <a href={LOGIN_ROUTE}>Login</a> <br/> 
      <a href={REGISTRATION_ROUTE}>Registration</a> <br/>
      <a href={PROFILE_ROUTE}>Профиль</a> <br/>
      <a onClick={() => { navigate(ADMIN_ROUTE) }}>Админка</a> */}

      <AppRouter />
    </div>
  );
}

export default App;
