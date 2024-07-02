import React from "react";

import ImgUser from "./../../components/media/user.png";

function LogIn() {

    // function output() {
    //     let testData = JSON.parse(localStorage.getItem("TestData"));
    //     console.log(testData);
    //     localStorage.removeItem("TestData");
    // }

    function toComeIn() {
        window.location.href=("/");
    }

    function toRegistration() {
        window.location.href=("/registration");
    }

    return (
        <div>
            <section class="log-in">
                <div class="log-in__img-container">
                    <img src={ImgUser} alt="" />
                </div>

                <div class="log-in__text-block">
                    <p class="log-in__text-block__description"><span class="big-text">Войдите в профиль</span>
                        Чтобы видеть акции и бонусы любого устройства</p>
                </div>

                <button onClick={ toComeIn }> Войти </button>
                <button onClick={ toRegistration }> Зарегестрироваться </button>
            </section>
        </div>
    )
}

export default LogIn;