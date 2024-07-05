import React from "react";
import '../../index.css';

function LogIn() {
    return (
        <section class="log-in">
            <div class="log-in__img-container">
                <img src="../../..public/media/user.png" alt="" />
            </div>

            <div class="log-in__text-block">
                <p class="log-in__text-block__description"><span class="big-text">Войдите в профиль</span>
                    Чтобы видеть акции и бонусы любого устройства</p>
            </div>

            <button class="btn log-in-btn">войти или зарегистрироваться</button>
        </section>
    )
}

export default LogIn;
