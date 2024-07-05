import "./navbar.css";
import "./../styles/style.css"
import { useState, useEffect, useContext } from "react";

// import Logo from "./../media/";
import ImgLogo from "./../media/Logo.png";
import ImgRestaurantSymbol from "./../media/restaurant-symbol.png";
import ImgLock from "./../media/lock.png";
import ImgProfile from "./../media/profile.png";
import { Context } from "../..";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE } from "../../utils/consts";

function Navbar() {

    const [checkAuth, setCheckAuth] = useState();
    const {user} = useContext(Context);
    const navigate = useNavigate();

    console.log("Данные пользователя в navbar -", user.isAuth);

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
                    {/* <!-- Не работает transition ease-out/ А вообще можно сделать замысловаткю привлекательную анимацию --> */}
                    <div class="navbar__item">
                        <a href="/" class="navbar__item__img-link">
                            <img src={ImgRestaurantSymbol} alt="" />
                        </a>

                        <a href="/" class="navbar__item__link">Рестораны</a>
                    </div>

                    <div class="navbar__item">
                        <a href="/" class="navbar__item__img-link">
                            <img src={ImgLock} alt="" />
                        </a>

                        <a href="/" class="navbar__item__link">Брони</a>
                    </div>

                    <div class="navbar__item">
                        <a  class="navbar__item__img-link" onClick={() => { navigate(user.isAuth ? PROFILE_ROUTE : LOGIN_ROUTE); }}>
                            <img src={ImgProfile} alt="" />
                        </a>

                        <a class="navbar__item__link" onClick={() => { navigate(user.isAuth ? PROFILE_ROUTE : LOGIN_ROUTE); }} > {user.isAuth ? "Профиль" : "Войти" }</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;