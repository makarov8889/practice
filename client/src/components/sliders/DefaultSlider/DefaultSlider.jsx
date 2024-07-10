import React, { useState } from "react";
import '../../../index.css';

function DefaultSlider(props) {
    const [count, setCount] = useState(0)

    function moveRight() {
        if(count == 1038)
            setCount(0)
        else 
            setCount(count + 519)                  
    }

    function moveLeft() {
        if(count == 0)
            setCount(1038)
        else
            setCount(count - 519)
        
    } 
console.log(props.imgs[0])
    return (
        <div class="default-slider">
            <div class="default-slider__slide-container">
                <div class="slides" style={{
                transform: `translateX(${-count}px)`
            }}>
                    <div class="slide"><img src={props.imgs[0]} alt="" /></div>
                    <div class="slide"><img src={props.imgs[1]} alt="" /></div>
                    <div class="slide"><img src={props.imgs[2]} alt="" /></div>
                </div>                

                <div class="default-slider__slide-container__btn-left" onClick={moveLeft}></div>
                <div class="default-slider__slide-container__btn-right" onClick={moveRight}></div>
            </div>

            <div class="default-slider__nav">
                <div class={count == 0 ? "default-slider__nav__page page-hovered" : "default-slider__nav__page" }></div>
                <div class={count == 519 ? "default-slider__nav__page page-hovered" : "default-slider__nav__page"  }></div>
                <div class={count == 1038 ? "default-slider__nav__page page-hovered" : "default-slider__nav__page" }></div>
            </div>
        </div>
    )
}

export default DefaultSlider;