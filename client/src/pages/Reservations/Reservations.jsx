import React, { useState } from "react";
import '../../index.css';
import DefaultSlider from "../../components/sliders/DefaultSlider/DefaultSlider.jsx"
import restaurantPhoto from "../../media/restaurant-photo.png"
import lock from "../../media/lock.png"
import profile from "../../media/profile.png"
import { RESERVE_ROUTE } from "../../utils/consts.js";
import { useNavigate } from "react-router-dom";

function Reservations() {
    const [state, setState] = useState(0)
    const [newComment, setComment] = useState(``)
    const [flag, setFlag] = useState(0)

    const navigate = useNavigate();

    let username = "Имя пользователя"

    let restaurantInfo = {
        imgs: [lock,restaurantPhoto,  profile],
        textInfo: {
            name: "Название ресторана",
            description: "Описание ресторана",
            menu: "Меню ресторана",
            otherInfo: "Адрес и режим работы"
        }
    }

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
            <DefaultSlider imgs={restaurantInfo.imgs}/>

            <div class="reservations__info">
                <div class="reservations__info__title-block">
                    <p>{restaurantInfo.textInfo.name} </p>

                    <a class="btn" onClick={ () => { navigate(RESERVE_ROUTE) } }>Забронировать</a>
                </div>

                <div class="reservations__info__text-block">
                    <p class="reservations__info__text-block__restaurant-description">{restaurantInfo.textInfo.description}</p>
                    <p class="reservations__info__text-block__restaurant-menu">{restaurantInfo.textInfo.menu}</p>
                    <p class="reservations__info__text-block__restaurant-info">{restaurantInfo.textInfo.otherInfo}</p>
                </div>

                <div class="comments">
                    <p class="comments__title">Отзывы</p>

                    <div class="comments__make-comment">
                        <div class="comments__make-comment__user-info">
                            <div class="comments__make-comment__user-info__avatar">
                                <img src={profile} alt="" />
                            </div>

                            <p class="comments__make-comment__user-info__username">{username}</p>
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

                    <a href="#" class="watchmore-link m-left-0">Смотреть ещё</a>
                </div>
            </div>
        </section>
    )
}

export default Reservations;