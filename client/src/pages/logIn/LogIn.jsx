import React from "react";

import ImgUser from "./../../components/media/user.png";
import { REGISTRATION_ROUTE } from "../../utils/consts";

function Login() {

    function toRegistration() {
        window.location.href=(REGISTRATION_ROUTE);
    }

    return (
        <div>
            <section class="log-in">
                <div class="log-in__img-container">
                    <img src={ ImgUser } alt="" />
                </div>

                <div class="log-in__text-block">
                    <p class="log-in__text-block__description"><span class="big-text">Войдите в профиль</span>
                        Чтобы видеть акции и бонусы любого устройства</p>
                </div>

                <button class="btn log-in-btn" onClick={toRegistration}>Зарегистрироваться</button>
            </section>
        </div>
    )
}

export default Login;