import React from "react";
import '../../index.css';

function Registration() {
    return (
        <div class="reg">
            <form class="reg__form">
                <input type="text" class="reg__form__input" placeholder="Введите имя" />
                <input type="text" class="reg__form__input" placeholder="Введите фамилию" />
                <input type="email" class="reg__form__input" placeholder="Введите почту" />
                <input type="password" class="reg__form__input" placeholder="Введите пароль" />

                <button class="btn reg-btn">Готово</button>
            </form>
        </div>
    )
}

export default Registration;