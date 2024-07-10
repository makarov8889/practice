import React, { useState } from "react";
import '../../index.css';
import DefaultSlider from "../../components/sliders/DefaultSlider/DefaultSlider.jsx"
import avatar from "../../media/profile.png"

function Reservations() {
    const [state, setState] = useState(0)
    const [newComment, setComment] = useState(``)
    const [flag, setFlag] = useState(0)

    function release() {   
        setState(1)
    }

    function hide() {
        setState(0)
    }

    function changeHeight(textarea) {
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 3 + "px"
    }

    function textareaOnInputFuncs(e) {
        setComment(e.target.value)
        changeHeight(e.target)
    }

    function cancel() {
        setComment(``)
        setFlag(1)
        hide()
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
                                <img src={avatar} alt="" />
                            </div>

                            <p class="comments__make-comment__user-info__username">Имя пользователя</p>
                        </div>                      

                                                                                                                        {/* Сделать как на ютубе */}
                        
                        <textarea placeholder="Комментарий..." class="comments__make-comment__comment-input" onClick={release} value={newComment} onInput={e => textareaOnInputFuncs(e)}></textarea>

                        <div class={state ? "comments__make-comment__btns-container release" : "comments__make-comment__btns-container"}>
                            <button class={ newComment.length != 0 ? 
                                        (newComment != newComment.length * ` `  && newComment != newComment.length * `\n`
                                                                ? "comment-btn send-btn" : "comment-btn locked-btn") : "comment-btn locked-btn" } 
                                    type={ newComment.length != 0 ? 
                                        (newComment != newComment.length * ` `  && newComment != newComment.length * `\n`
                                                                                        ? "disabled" : "default") : "default" }>Отправить</button>
                            <button class="comment-btn" onClick={e => cancel(e)}>Отменить</button>                            
                        </div>
                    </div>

                    <a href="" class="watchmore-link m-left-0">Смотреть ещё</a>
                </div>
            </div>
        </section>
    )
}

export default Reservations;