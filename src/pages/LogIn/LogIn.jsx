import React from "react";
import {useLocation} from "react-router-dom"
import '../../index.css';

function LogIn() {
    const location = useLocation()

    return (
        <section class="log-in">
            <div class="log-in__img-container">
                <img src="../../..public/media/user.png" alt="" />
            </div>

            <div class="log-in__text-block">
                <p class="log-in__text-block__description"><span class="big-text">Войдите в профиль</span>
                    {location.pathname == "/profile" ? `Чтобы видеть акции и бонусы любого устройства` : `Чтобы видеть историю своих бронирований`}</p>
            </div>

            <a href="" class="btn log-in-btn">войти или зарегистрироваться</a>
        </section>
    )
}

export default LogIn;
