import React from "react";
import '../../index.css';

function Profile() {
    return (
        <section class="profile">
            <div class="profile__user-info">
                <div class="img-container">
                    <img src="../../..public/media/user.png" alt="" />
                </div>

                <div class="profile__user-info__text-info">
                    <p>Имя Фамилия</p>
                    <p>Почта</p>
                </div> 
            </div>            

            <div class="profile__promotions-container">
                <h2 class="profile__promotions-container__description">Ваши акции и бонусы:</h2>

                <div class="profile__promotions-container__promotions">
                    <div class="profile__promotions-container__promotions__promotion">
                        <div class="profile__promotions-container__promotions__promotion__img-container">
                            <p>Картинка акции или бонуса</p>
                        </div>

                        <div class="profile__promotions-container__promotions__promotion__description-block">
                            <p class="profile__promotions-container__promotions__promotion__description-block__text">Описание акции</p>
                        </div>
                    </div>
                </div>

                <div class="profile__promotions-container__promotions">
                    <div class="profile__promotions-container__promotions__promotion">
                        <div class="profile__promotions-container__promotions__promotion__img-container">
                            <p>Картинка акции или бонуса</p>
                        </div>

                        <div class="profile__promotions-container__promotions__promotion__description-block">
                            <p class="profile__promotions-container__promotions__promotion__description-block__text">Описание акции</p>
                        </div>
                    </div>
                </div>

                <a href="" class="watchmore-link">Смотреть ещё</a>
            </div>
        </section>
    )
}

export default Profile;