import React from "react";
import '../../index.css';
import Gurman from "../../components/media/Gurman.jpg"
import Veterok from "../../components/media/Veterok.jpg"
import Aurora from "../../components/media/Aurora.jpg"
import East_fairytale from "../../components/media/East_fairytale.jpg"

let data = [
    {
        img: Gurman,
        name: "Ресторан \"Гурман\"",
        address: "Ул. Центральная, 15, Москва",
        schedule: "Ежедневно с 12:00 до 23:00"
    },
    {
        img: Veterok,
        name: "Ресторан \"Ветерок\"",
        address: "Набережная реки Москвы, 7, Москва",
        schedule: "Ежедневно с 11:00 до 00:00"
    },
    {
        img: Aurora,
        name: "Ресторан \"Аврора\"",
        address: "Ул. Гоголя, 10, Москва",
        schedule: "Вторник-суббота с 18:00 до 00:00"
    },
    {
        img: East_fairytale,
        name: "Ресторан \"Восточная сказка\"",
        address: "Ул. Пушкина, 20, Москва",
        schedule: "Ежедневно с 13:00 до 23:00"
    }
]

function PrintRestaurants(data) {
    return (
        <div class="list-restaurants">
            {data.data.map(item => (
                <div class="list-restaurants__restaurant">
                <div class="list-restaurants__restaurant__img-container">
                    <img src={item.img} alt="" />
                </div>

                <div class="list-restaurants__restaurant__description-block">
                    <p class="list-restaurants__restaurant__description-block__restaurant-name">{item.name}</p>
                    <p class="list-restaurants__restaurant__description-block__restaurant-address">{item.address}</p>
                    <p class="list-restaurants__restaurant__description-block__restaurant-schedule">{item.schedule}</p>
                </div>
            </div>                    
            ))}
        </div>
    )
}

function RestaurantsList() {
    return (
        <section class="choose-restaurant list-restaurants-container">  
            <p class="choose-restaurant__title">Выберете ресторан по своему вкусу</p>
            
            <PrintRestaurants data={data} />
            
            <a href="" class="watchmore-link m-left-0">Смотреть ещё</a>
        </section>
    )
}

export default RestaurantsList;