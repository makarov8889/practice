import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Header/Header.jsx';

import Home from "./pages/Home/Home.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import Authorization from "./pages/Authorization/Authorization.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Restaurants from "./pages/Restaurants/Restaurants.jsx";
import RestaurantsList from "./pages/RestaurantsList/RestaurantsList.jsx";
import Reservations from "./pages/Reservations/Reservations.jsx";
import ReservationsHistory from "./pages/ReservationsHistory/ReservationsHistory.jsx";
import Reserve from "./pages/Reserve/Reserve.jsx";
import Admin from "./pages/Admin/Admin.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' Component={ Home }/>
        <Route path='/logIn' Component={ LogIn }/>
        <Route path='/authorization' Component={ Authorization }/>
        <Route path='/registration' Component={ Registration }/>
        <Route path='/profile' Component={ Profile }/>
        <Route path='/restaurants' Component={ Restaurants }/>
        <Route path='/restaurantsList' Component={ RestaurantsList }/>
        <Route path='/reservations' Component={ Reservations }/>
        <Route path='/reservationsHistory' Component={ ReservationsHistory }/>
        <Route path='/reserve' Component={ Reserve }/>
        <Route path='/admin' Component={ Admin }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;