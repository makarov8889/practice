import "./navbar.css";
import "./../styles/style.css"
import { useState, useEffect } from "react";

// import Logo from "./../media/";
import ImgLogo from "./../media/Logo.png";
import ImgRestaurantSymbol from "./../media/restaurant-symbol.png";
import ImgLock from "./../media/lock.png";
import ImgProfile from "./../media/profile.png";

function Navbar() {

    const [checkAuth, setCheckAuth] = useState();

        useEffect(() => {
            if(localStorage.getItem("TestData"))
                setCheckAuth(JSON.parse(localStorage.getItem("TestData")).text);
        }, []);

    return (
        <div>
            <header>
                <a href="/" class="logo-link m-left-26">
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
                        <a href="/profile" class="navbar__item__img-link">
                            <img src={ImgProfile} alt="" />
                        </a>

                        <a href={checkAuth == "Admin" ? "/profile" : "/logIn" } class="navbar__item__link"> {checkAuth == "Admin" ? "Профиль" : "Войти" }</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;