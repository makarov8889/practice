import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";

function Admin() {

    const [checkAdmin, setCheckAdmin] = useState();
    const [serverData, setServerData] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/api/person")
            .then((response) => {
                // setDataAuth(response.data.values);
                console.log("Данные с сервера - ", response.data);
                // for (let i = 0; i < response.data.length; i++) {
                //     serverData[i] = response.data[i];
                // }
                setServerData(response.data);
                console.log(serverData);
            });

            if(localStorage.getItem("TestData"))
                setCheckAdmin(JSON.parse(localStorage.getItem("TestData")).text);
    }, [])

    // setCheckAdmin(JSON.parse(localStorage.getItem("TestData")));
    
    console.log("Проверочные данные", checkAdmin);

    function input() {
        localStorage.setItem("TestData", JSON.stringify({text: "Admin"}));
        console.log("Тестовые данные записаны")
    }

    function output() {
        let testData = JSON.parse(localStorage.getItem("TestData"));
        console.log(testData);
        localStorage.removeItem("TestData");
    }

    function exit() {
        console.log("Тестовые данные удалены");
        localStorage.removeItem("TestData");
    }

    return (
        <div>
            <button onClick={input}> Войти </button>
            <button onClick={output}> Вывести </button>
            <button onClick={exit}> Выйти </button>
            {
                checkAdmin == "Admin" ? 
                <div>Вы вошли</div>
                :
                <div>Вы кто?</div>
            }
            <h1> Админка </h1>
            {/* {serverData.map((item, index) => (
                <p>{item.mail}</p>
            ))} */}
            {serverData ? (
                <div>Gel</div>
            )
            :
            (
                <div>no Data</div>
            )
            }
        </div>
    )
}

export default Admin;