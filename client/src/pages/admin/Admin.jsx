import React, { useContext } from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Context } from "../..";

function Admin() {

    // const [checkAdmin, setCheckAdmin] = useState();
    // const [serverData, setServerData] = useState();

    const {user} = useContext(Context);

    useEffect(() => {
        axios.get("http://localhost:5000/api/user")
            .then((response) => {
                // setDataAuth(response.data.values);
                // console.log("Данные с сервера - ", response.data);
                // setServerData(response.data);
                // serverData = JSON.parse(serverData);
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
        // let testData = JSON.parse(localStorage.getItem("TestData"));
        // console.log(testData);
        // localStorage.removeItem("TestData");
        console.log(console.log(serverData[0]["name"]))
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