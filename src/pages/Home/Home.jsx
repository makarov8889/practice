import React from "react";
import '../../index.css';
import restaurantPhoto from "../../media/restaurant-photo.png"

function Home() {
    return (
        <section class="lending">
            <a href="/reservations">
                <div class="lending__img-container">
                    <img src={restaurantPhoto} alt="" href=""/>
                </div>
            </a>
            

            <div class="lending__text-block">
                <h2 class="title-text m-bottom-107">Забронируйте столик в<br />
                    лучших ресторанах города</h2>

                <p class="lending__text-block__description m-bottom-60">Наш сервис поможет вам легко и быстро забронировать столик 
                    в любимых ресторанах. Экономьте время, сравнивайте варианты и бронируйте столики в несколько кликов!</p>

                <button class="btn">Забронировать</button>
            </div>
        </section>
    )
}

export default Home;