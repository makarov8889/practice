import "./../styles/style.css"
import { useState, useEffect, useContext } from "react";

// import Logo from "./../media/";
import ImgLogo from "./../media/Logo.png";
import ImgRestaurantSymbol from "./../media/restaurant-symbol.png";
import ImgLock from "./../media/lock.png";
import ImgProfile from "./../media/profile.png";
import { Context } from "../..";
import { useNavigate, useLocation } from "react-router-dom";
import { MAIN_ROUTE, AUTH_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PROFILE_ROUTE, RESERVATION_ROUTE, RESERVATION_HISTORY_ROUTE, RESERVE_ROUTE, RESTAURANTS_ROUTE, RESTAURANTS_LIST_ROUTE } from "../../utils/consts";

function Navbar() {
    const location = useLocation();
    const [checkAuth, setCheckAuth] = useState();
    const {user} = useContext(Context);
    const navigate = useNavigate();

    // console.log("Данные пользователя в navbar -", user.user.data.token);

        useEffect(() => {
            if(localStorage.getItem("TestData"))
                setCheckAuth(JSON.parse(localStorage.getItem("TestData")).text);
        }, []);

    return (
        <div>
            <header>
                <a class="logo-link m-left-26" onClick={() => { navigate(MAIN_ROUTE); }} >
                    <img src={ImgLogo} />
                </a>

                <nav class="navbar">
                    <div class="navbar__item">
                        <a class="navbar__item__img-link" onClick={() => { navigate(RESTAURANTS_ROUTE) }}>
                            <img src={ImgRestaurantSymbol} alt="" />
                        </a>

                        <a class={location.pathname === RESTAURANTS_ROUTE || location.pathname === RESTAURANTS_LIST_ROUTE ? "navbar__item__link chosen-link" : "navbar__item__link"} onClick={() => { navigate(RESTAURANTS_ROUTE) }}>Рестораны</a>
                    </div>

                    <div class="navbar__item">
                        <a class="navbar__item__img-link" onClick={() => { navigate(RESERVATION_ROUTE) }}>
                            <img src={ImgLock} alt="" />
                        </a>

                        <a class={location.pathname === RESERVATION_ROUTE || location.pathname === RESERVATION_HISTORY_ROUTE || location.pathname === RESERVE_ROUTE ? "navbar__item__link chosen-link" : "navbar__item__link"} onClick={() => { navigate(RESERVATION_ROUTE) }}>Брони</a>
                    </div>

                    <div class="navbar__item">
                        <a  class="navbar__item__img-link" onClick={() => { navigate(user.isAuth ? PROFILE_ROUTE : LOGIN_ROUTE); }}>
                            <img src={ImgProfile} alt="" />
                        </a>

                        <a class={location.pathname === AUTH_ROUTE || location.pathname === LOGIN_ROUTE || location.pathname === PROFILE_ROUTE || location.pathname === REGISTRATION_ROUTE ? "navbar__item__link chosen-link" : "navbar__item__link"} onClick={() => { navigate(user.isAuth ? PROFILE_ROUTE : LOGIN_ROUTE); }} > {user.isAuth ? "Профиль" : "Войти" }</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;