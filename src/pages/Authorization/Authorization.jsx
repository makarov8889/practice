import React from "react";
import '../../index.css';

function Authorization() {
    return (
        <div class="auth">
            <form class="auth__form">
                                    {/* Перемещать текстовый курсор в начало слова внутри инпута с помощью css  */}
                <input type="email" class="auth__form__input" placeholder="Введите почту" />
                <input type="password" class="auth__form__input" placeholder="Введите пароль" />

                <button class="btn auth-btn">Войти</button>
            </form>
        </div>
    )
}

export default Authorization;