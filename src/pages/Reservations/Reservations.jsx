import React, { useState } from "react";
import '../../index.css';
import DefaultSlider from "../../components/sliders/DefaultSlider/DefaultSlider.jsx"

function Reservations() {
    let commentText
    const [state, setState] = useState(0)

    function release() {   
        setState(1)

        console.log(commentText)
    }

    function hide() {
        setState(0)
    }

    return (
        <section class="reservations">
                                                                                                        {/* Сделать слайдер  */}
            <DefaultSlider/>

            <div class="reservations__info">
                <div class="reservations__info__title-block">
                    <p>Название ресторана </p>

                    <a href="/reserve" class="btn">Забронировать</a>
                </div>

                <div class="reservations__info__text-block">
                    <p class="reservations__info__text-block__restaurant-description">Описание ресторана</p>
                    <p class="reservations__info__text-block__restaurant-menu">Меню ресторана</p>
                    <p class="reservations__info__text-block__restaurant-info">Адрес и режим работы</p>
                </div>

                <div class="comments">
                    <p class="comments__title">Отзывы</p>

                    <div class="comments__make-comment">
                        <div class="comments__make-comment__user-info">
                            <div class="comments__make-comment__user-info__avatar">
                                <img src="../../..public/media/profile.png" alt="" />
                            </div>

                            <p class="comments__make-comment__user-info__username">Имя пользователя</p>
                        </div>                      

                                                                                                                        {/* Сделать как на ютубе */}
                        <textarea placeholder="Комментарий..." class="comments__make-comment__comment-input" onClick={release} id="commentText"></textarea>

                        <div class={state ? "comments__make-comment__btns-container release" : "comments__make-comment__btns-container"}>
                            <button class="comment-btn locked-btn" 
                                type={ document.getElementById("commentText").value.length != 0 ? 
                                (document.getElementById("commentText").textContent != document.getElementById("commentText").value.length * ` ` 
                                && document.getElementById("commentText").textContent != document.getElementById("commentText").value.length * `\n` 
                                ? "disabled" : "default") : "default" }>Отправить</button>
                            <button class="comment-btn" onClick={hide}>Отменить</button>                            
                        </div>
                    </div>

                    <a href="" class="watchmore-link m-left-0">Смотреть ещё</a>
                </div>
            </div>
        </section>
    )
}

export default Reservations;