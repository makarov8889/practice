import React from "react";
import {useLocation} from "react-router-dom"
import '../../index.css';
import logo from "../../media/Logo.png"
import restaurantSymbol from "../../media/restaurant-symbol.png"
import lock from "../../media/lock.png"
import profile from "../../media/profile.png"

function Header() {
    const location = useLocation()

    return (
        <header>
            <a href="/" class="logo-link m-left-26">
                <img src={logo}></img>
            </a>

            <nav class="navbar">
                                                            {/* Не работает transition ease-out/ А вообще можно сделать замысловаткю привлекательную анимацию  */}  
                <div class="navbar__item">
                    <a href="/restaurants" class="navbar__item__img-link">
                        <img src={restaurantSymbol} alt="" />
                    </a>

                    <a href="/restaurants" class={location.pathname == "/restaurants" || location.pathname == "/restaurantsList" ? "navbar__item__link chosen-link" : "navbar__item__link"}>Рестораны</a>
                </div>

                <div class="navbar__item">
                    <a href="/reservations" class="navbar__item__img-link">
                        <img src={lock} alt="" />
                    </a>

                    <a href="/reservations" class={location.pathname == "/reservations" || location.pathname == "/reserve" || location.pathname == "/reservationsHistory" ? "navbar__item__link chosen-link" : "navbar__item__link"}>Брони</a>
                </div>

                <div class="navbar__item">
                    <a href="/profile" class="navbar__item__img-link">
                        <img src={profile} alt="" />
                    </a>

                    <a href="/profile" class={location.pathname == "/logIn" || location.pathname == "/profile" ? "navbar__item__link chosen-link" : "navbar__item__link"}>Профиль</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;