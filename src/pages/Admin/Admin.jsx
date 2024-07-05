import React from "react";
import '../../index.css';

function Admin() {
    return (
        <section class="choose-restaurant">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d152711.06513908666!2d34.46763803820649!3d53.269641659792605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1719514119015!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>            

            <div class="restaurants-container">
                <div class="restaurants-container__upper-block">
                    <p class="choose-restaurant__upper-block__description">Выберете ресторан по своему вкусу</p>

                    <button class="btn">Добавить ресторан</button>
                </div>

                <div class="restaurants">
                                                     {/* Анимация  */}
                    <div class="restaurants__restaurant">
                        <div class="restaurants__restaurant__img-container">
                            <p>Картинка ресторана</p>
                        </div>

                        <div class="restaurants__restaurant__description-block">
                            <p class="restaurants__restaurant__description-block__restaurant-name">Название ресторана</p>
                            <p class="restaurants__restaurant__description-block__restaurant-address">Адрес ресторана</p>
                            <p class="restaurants__restaurant__description-block__restaurant-schedule">Режим работы</p>
                        </div>
                    </div>                

                    <div class="restaurants__restaurant">
                        <div class="restaurants__restaurant__img-container">
                            <p>Картинка ресторана</p>
                        </div>

                        <div class="restaurants__restaurant__description-block">
                            <p class="restaurants__restaurant__description-block__restaurant-name">Название ресторана</p>
                            <p class="restaurants__restaurant__description-block__restaurant-address">Адрес ресторана</p>
                            <p class="restaurants__restaurant__description-block__restaurant-schedule">Режим работы</p>
                        </div>
                    </div> 
                </div>

                <a href="/Choose_restaurant_in_list.html" class="watchmore-link m-left-0">Смотреть ещё</a>
            </div>
        </section>
    )
}

export default Admin;