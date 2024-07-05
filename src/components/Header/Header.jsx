import React from "react";
import '../../index.css';
import logo from "../../media/Logo.png"
import restaurantSymbol from "../../media/restaurant-symbol.png"
import lock from "../../media/lock.png"
import profile from "../../media/profile.png"

function Header() {
    return (
        <header>
            <a href="/" class="logo-link m-left-26">
                <img src={logo}></img>
            </a>

            <nav class="navbar">
                                                            {/* Не работает transition ease-out/ А вообще можно сделать замысловаткю привлекательную анимацию  */}
                                                            {/* Изменение цвета текста ссылки на разных страницах */}
                <div class="navbar__item">
                    <a href="/restaurants" class="navbar__item__img-link">
                        <img src={restaurantSymbol} alt="" />
                    </a>

                    <a href="/restaurants" class="navbar__item__link">Рестораны</a>
                </div>

                <div class="navbar__item">
                    <a href="/reservations" class="navbar__item__img-link">
                        <img src={lock} alt="" />
                    </a>

                    <a href="/reservations" class="navbar__item__link">Брони</a>
                </div>

                <div class="navbar__item">
                    <a href="/profile" class="navbar__item__img-link">
                        <img src={profile} alt="" />
                    </a>

                    <a href="/profile" class="navbar__item__link">Профиль</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;