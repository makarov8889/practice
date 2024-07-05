import './App.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';

import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from './utils/consts.js';
import AppRouter from './components/AppRouter.js';

function App() {
  
  return (
    <BrowserRouter>
      {/* Участок для шаблонизации всего сайта */}
      <Navbar />
      <a href={MAIN_ROUTE}>Главная</a> <br/>
      <a href={LOGIN_ROUTE}>Login</a> <br/>
      <a href={REGISTRATION_ROUTE}>Registration</a> <br/>
      <a href={PROFILE_ROUTE}>Профиль</a> <br/>
      <a href={ADMIN_ROUTE}>Админка</a>

      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
