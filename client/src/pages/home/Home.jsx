import React, { useContext, useState } from "react";
import { Context } from "../..";
import { toJS } from "mobx";

function Home() {

    function output() {
        let testData = JSON.parse(localStorage.getItem("TestData"));
        console.log(testData);
        localStorage.removeItem("TestData");
    }

    const {user} = useContext(Context);

    const userData = toJS(user.user);
    console.log("Данные пользователя -", userData);

    return (
        <div>
            <h1> Главная </h1>
            <button onClick={output}>Вывести</button>
        </div>
    )
}

export default Home;