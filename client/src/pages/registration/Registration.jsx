import React from "react";

function Registration() {

    function registration(e) {
        e.preventDefault();
        return (
            <div> Мы отправили </div>
        );
    }

    let cetchForm = document.getElementById("registration");
    if(cetchForm) {
        console.log("Мы поймали его");
    }

    return (
        <div class="reg">
            <form id="registration" class="reg__form" action="http://localhost:5000/api" method="post">
                {/* <!-- Перемещать текстовый курсор в начало слова внутри инпута с помощью css  --> */}
                <input type="text" class="reg__form__input" placeholder="Введите имя" />
                <input type="text" class="reg__form__input" placeholder="Введите фамилию" />
                <input type="email" class="reg__form__input" placeholder="Введите почту" />
                <input type="password" class="reg__form__input" placeholder="Введите пароль" />

                <button class="btn reg-btn" type="submit">Готово </button>
            </form>
        </div>
    )
}

export default Registration;