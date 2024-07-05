import React from "react";
import '../../index.css';

function RestaurantsList() {
    return (
        <section class="choose-restaurant list-restaurants-container">  
            <p class="choose-restaurant__title">Выберете ресторан по своему вкусу</p>
            
            <div class="list-restaurants">
                <div class="list-restaurants__restaurant">
                    <div class="list-restaurants__restaurant__img-container">
                        <p>Картинка</p>
                    </div>

                    <div class="list-restaurants__restaurant__description-block">
                        <p class="list-restaurants__restaurant__description-block__restaurant-name">Название ресторана</p>
                        <p class="list-restaurants__restaurant__description-block__restaurant-address">Адрес ресторана</p>
                        <p class="list-restaurants__restaurant__description-block__restaurant-schedule">Режим работы</p>
                    </div>
                </div>

                <div class="list-restaurants__restaurant">
                    <div class="list-restaurants__restaurant__img-container">
                        <p>Картинка</p>
                    </div>

                    <div class="list-restaurants__restaurant__description-block">
                        <p class="list-restaurants__restaurant__description-block__restaurant-name">Название ресторана</p>
                        <p class="list-restaurants__restaurant__description-block__restaurant-address">Адрес ресторана</p>
                        <p class="list-restaurants__restaurant__description-block__restaurant-schedule">Режим работы</p>
                    </div>
                </div>

                <div class="list-restaurants__restaurant">
                    <div class="list-restaurants__restaurant__img-container">
                        <p>Картинка</p>
                    </div>

                    <div class="list-restaurants__restaurant__description-block">
                        <p class="list-restaurants__restaurant__description-block__restaurant-name">Название ресторана</p>
                        <p class="list-restaurants__restaurant__description-block__restaurant-address">Адрес ресторана</p>
                        <p class="list-restaurants__restaurant__description-block__restaurant-schedule">Режим работы</p>
                    </div>
                </div>

                <div class="list-restaurants__restaurant">
                    <div class="list-restaurants__restaurant__img-container">
                        <p>Картинка</p>
                    </div>

                    <div class="list-restaurants__restaurant__description-block">
                        <p class="list-restaurants__restaurant__description-block__restaurant-name">Название ресторана</p>
                        <p class="list-restaurants__restaurant__description-block__restaurant-address">Адрес ресторана</p>
                        <p class="list-restaurants__restaurant__description-block__restaurant-schedule">Режим работы</p>
                    </div>
                </div>
            </div>
            
            <a href="" class="watchmore-link m-left-0">Смотреть ещё</a>
        </section>
    )
}

export default RestaurantsList;