import React, { useState } from "react";
import '../../../index.css';

function DefaultSlider() {
    const [count, setCount] = useState(1)

    function increment() {
        if(count == 3)
            setCount(1)
        else
            setCount(count + 1)
    }

    function decrement() {
        if(count == 1)
            setCount(3)
        else
            setCount(count - 1)
    }

    return (
        <div class="default-slider">
            {/* Добавить анимацию переключения картинки */}
            <div class="default-slider__slide-container img">
                <div class="default-slider__slide-container__btn-left" onClick={decrement}></div>
                <div class="default-slider__slide-container__btn-right" onClick={increment}></div>
            </div>

            <div class="default-slider__nav">
                <div class={count == 1 ? "default-slider__nav__page page-hovered" : "default-slider__nav__page" }></div>
                <div class={count == 2 ? "default-slider__nav__page page-hovered" : "default-slider__nav__page"  }></div>
                <div class={count == 3 ? "default-slider__nav__page page-hovered" : "default-slider__nav__page" }></div>
            </div>
        </div>
    )
}

export default DefaultSlider;