import React from "react";
import '../../index.css';

                                            {/* <link rel="preconnect" href="https://fonts.googleapis.com">
                                                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                                                <link href="https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link> */}

function ReservationsHistory() {
    return (
        <section class="reservations-history">         
            <p class="reservations-history__description">История ваших бронирований</p>

            <div class="restaurants">
                                                {/* Анимация  */}
                <div class="restaurants__restaurant reservation-item">
                    <div class="restaurants__restaurant__img-container">
                        <p>Картинка ресторана</p>
                    </div>

                    <div class="restaurants__restaurant__description-block">
                        <p class="restaurants__restaurant__description-block__restaurant-name">Название ресторана</p>
                        <p class="restaurants__restaurant__description-block__restaurant-address">Адрес ресторана</p>
                        <p class="restaurants__restaurant__description-block__restaurant-schedule">Режим работы</p>
                        <p class="restaurants__restaurant__description-block__reservation-date">Дата бронирования</p>
                    </div>

                    <button class="btn btn-cancel">Отменить бронь</button>
                </div>                

                <div class="restaurants__restaurant reservation-item">
                    <div class="restaurants__restaurant__img-container">
                        <p>Картинка ресторана</p>
                    </div>

                    <div class="restaurants__restaurant__description-block">
                        <p class="restaurants__restaurant__description-block__restaurant-name">Название ресторана</p>
                        <p class="restaurants__restaurant__description-block__restaurant-address">Адрес ресторана</p>
                        <p class="restaurants__restaurant__description-block__restaurant-schedule">Режим работы</p>
                        <p class="restaurants__restaurant__description-block__reservation-date">Дата бронирования</p>
                    </div>

                    <button class="btn btn-cancel">Отменить бронь</button>
                </div> 
            </div>

            <a href="/Choose_restaurant_in_list.html" class="watchmore-link m-left-0">Смотреть ещё</a>
        </section>
    )
}

export default ReservationsHistory;