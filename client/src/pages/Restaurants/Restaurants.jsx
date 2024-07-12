import React from "react";
import '../../components/styles/index.css';
import Gurman from "../../components/media/Gurman.jpg"
import Veterok from "../../components/media/Veterok.jpg"

const frameStyle = {
    borderRadius: '25px',
    borderWidth: '0px'
};

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
    }
]

function PrintRestaurants(data) {
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
                    </div>
                </div>                     
            ))}
        </div>
    )
}

function Restaurants() {
    return (
        <section class="choose-restaurant">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d152711.06513908666!2d34.46763803820649!3d53.269641659792605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1719514119015!5m2!1sru!2sru" width="600" height="450" style={frameStyle} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>            

            <div class="restaurants-container">
                <p class="choose-restaurant__description">Выберете ресторан по своему вкусу</p>

                <PrintRestaurants data={data} />

                <a href="/restaurantsList" class="watchmore-link m-left-0">Смотреть ещё</a>
            </div>
        </section>
    )
}

export default Restaurants;