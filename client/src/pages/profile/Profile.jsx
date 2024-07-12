// Profile.jsx
import React, { useContext } from "react";
import { useState, useEffect } from 'react';
import { Context } from "../..";
import {jwtDecode} from "jwt-decode";
import { backend_user_info } from "../../http/userApi";
import { MAIN_ROUTE } from "../../utils/consts";
import wine from "../../components/media/wine.jpg";
import sale from "../../components/media/sale.png";
import avatar from "../../components/media/user.png"

let data = [
    {
        img: wine,
        description: "Купите 2 бутылки вина и получите 3 в подарок!"
    },
    {
        img: sale,
        description: "15% скидка на все!"
    }
]

function PrintPromotions(data) {
    return (
        <div class="profile__promotions-container__promotions">
            {data.data.map(item => (
                <div class="profile__promotions-container__promotions__promotion">
                <div class="profile__promotions-container__promotions__promotion__img-container">
                    <img src={item.img} alt="" />
                </div>

                <div class="profile__promotions-container__promotions__promotion__description-block">
                    <p class="profile__promotions-container__promotions__promotion__description-block__text">{item.description}</p>
                </div>
            </div>                     
            ))}
        </div>
    )
}

function Profile() {
    const [userData, setUserData] = useState(false);
    const { user } = useContext(Context);

    useEffect(() => {
        userInfo();
    }, []);

    const userInfo = async () => {
        if (user) {
            try {
                console.log(user.user.data.token);
                const decodeToken = jwtDecode(user.user.data.token);
                console.log("Токен -", decodeToken);

                const data = await backend_user_info(decodeToken.id);
                console.log(jwtDecode(data.data.token));
                setUserData(jwtDecode(data.data.token));
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }
    };

    const exit = async () => {
        localStorage.setItem("token", "");
        user.clearUser();
        window.location.href = MAIN_ROUTE;
    }

    return (
        <div>
        {userData ? (
            <section class="profile">
                <div class="profile__user-info">
                    <div class="profile__user-info__img-container">
                        <img src={avatar} alt="" />
                    </div>

                    <div class="profile__user-info__text-info">
                        <p>{userData.name} {userData.surname}</p>
                        <p>{userData.mail}</p>
                    </div> 

                    <button class="btn btn-cancel" onClick={ exit }> Выйти </button>
                </div>            

                <div class="profile__promotions-container">
                    <h2 class="profile__promotions-container__description">Ваши акции и бонусы:</h2>

                    <PrintPromotions data={data} />

                    <a href="" class="watchmore-link">Смотреть ещё</a>
                </div>
            </section>
        ) : (
            <div>
                Произошла ошибка, данные о пользователе не получены
            </div>
        )}

        </div>
    );
}

export default Profile;
