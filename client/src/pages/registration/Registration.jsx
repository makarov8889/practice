import React from "react";

function Registration() {

    return (
        <div class="reg">
            <form class="reg__form" >
                {/* <!-- Перемещать текстовый курсор в начало слова внутри инпута с помощью css  --> */}
                <input type="text" class="reg__form__input" placeholder="Введите имя" />
                <input type="text" class="reg__form__input" placeholder="Введите фамилию" />
                <input type="email" class="reg__form__input" placeholder="Введите почту" />
                <input type="password" class="reg__form__input" placeholder="Введите пароль" />

                <button class="btn reg-btn">Готово </button>
            </form>
        </div>
    )
}

export default Registration;