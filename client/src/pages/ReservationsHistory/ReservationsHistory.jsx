import React from "react";
import '../../index.css';
import Gurman from "../../components/media/Gurman.jpg"
import Veterok from "../../components/media/Veterok.jpg"

let data = [
    {
        img: Gurman,
        name: "Ресторан \"Гурман\"",
        address: "Ул. Центральная, 15, Москва",
        schedule: "Ежедневно с 12:00 до 23:00",
        reserve_date: "12.04.2024 21-52"
    },
    {
        img: Veterok,
        name: "Ресторан \"Ветерок\"",
        address: "Набережная реки Москвы, 7, Москва",
        schedule: "Ежедневно с 11:00 до 00:00",
        reserve_date: "07.12.2023 12-03"
    }
]

function PrintReserves(data) {
    return (
        <div class="restaurants">
            {data.data.map(item => (
                <div class="restaurants__restaurant">
                    <div class="restaurants__restaurant__img-container">
                        <img src={item.img} alt="" />
                    </div>

                    <div class="restaurants__restaurant__description-block">    
                        <p class="restaurants__restaurant__description-block__restaurant-name">{item.name}</p>
                        <p class="restaurants__restaurant__description-block__restaurant-address">{item.address}</p>
                        <p class="restaurants__restaurant__description-block__restaurant-schedule">{item.schedule}</p>
                        <p class="restaurants__restaurant__description-block__reservation-date">Дата бронирования:  {item.reserve_date}</p>
                    </div>
                </div>                     
            ))}
        </div>
    )
}

function ReservationsHistory() {
    return (
        <section class="reservations-history">         
            <p class="reservations-history__description">История ваших бронирований</p>

            <div class="restaurants">
                <PrintReserves data={data} />                
            </div>

            <a href="/Choose_restaurant_in_list.html" class="watchmore-link m-left-0">Смотреть ещё</a>
        </section>
    )
}

export default ReservationsHistory;