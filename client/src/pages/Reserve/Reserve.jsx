import React from "react";
import '../../index.css';

function Reserve() {
    return (
        <section class="make-reservation">
            <div class="make-reservation__img-container">
                <p>Картинка</p>
            </div>

            <form action="" class="make-reservation__reservation-form">
                <div class="make-reservation__reservation-form__inputs">
                                                                                        {/* Инпуты пляшут при focus */}
                    <input type="datetime-local" class="make-reservation__reservation-form__inputs__datetime" placeholder="Введите дату и время" />
                    <input type="number" class="make-reservation__reservation-form__inputs__clients" placeholder="количество персон на столик"/>
                    <textarea class="make-reservation__reservation-form__inputs__wishes" placeholder="особые пожелания"></textarea>
                </div>

                <div class="make-reservation__reservation-form__btns">
                    <a class="btn" href="/reservationsHistory" >Забронировать</a>
                    <a class="btn btn-cancel" href="/reservations">Отменить</a>
                </div>
            </form>
        </section>
    )
}

export default Reserve;