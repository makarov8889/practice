import React, { useContext, useState } from "react";
import { Context } from "../..";
import { jwtDecode } from "jwt-decode";
import { toJS } from "mobx";
import restaurantPhoto from "../../components/media/restaurant-photo.png";
import { useNavigate } from "react-router-dom";
import { RESERVATION_ROUTE } from "../../utils/consts";

function Home() {

    const navigate = useNavigate();

    function output() {
        let token = JSON.parse(localStorage.getItem("token"));
        console.log(token);
    }

    const {user} = useContext(Context);

    const userData = toJS(user.user);
    // console.log("Данные пользователя -", ( userData && userData.data ? jwtDecode(userData.data.token) : "нет") );
    // console.log("Токен пользователя -", ( userData && userData.data ? userData.data.token : "нет") );

    return (
        <div>
            <section class="lending">
            <a onClick={ () => { navigate(RESERVATION_ROUTE) } }>
                <div class="lending__img-container">
                    <img src={restaurantPhoto} alt="" href=""/>
                </div>
            </a>            

            <div class="lending__text-block">
                <h2 class="title-text m-bottom-107">Забронируйте столик в<br />
                    лучших ресторанах города</h2>

                <p class="lending__text-block__description m-bottom-60">Наш сервис поможет вам легко и быстро забронировать столик 
                    в любимых ресторанах. Экономьте время, сравнивайте варианты и бронируйте столики в несколько кликов!</p>

                <a class="btn" onClick={ () => { navigate(RESERVATION_ROUTE) } }>Забронировать</a>
            </div>
        </section>
        </div>
    )
}

export default Home;