import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../..";
import {jwtDecode} from "jwt-decode";

function Admin() {
    const [checkAdmin, setCheckAdmin] = useState();
    const [serverData, setServerData] = useState();
    const [newServerData, setNewServerData] = useState();
    const [files, setFiles] = useState();
    
    const { user } = useContext(Context);

    useEffect(() => {
        console.log("Контекст пользователя:", user);

        if (user && user.user.data && user.user.data.token) {
            const token = user.user.data.token;
            console.log("Токен:", token);
            try {
                const decodedToken = jwtDecode(token);
                console.log("Декодированный токен:", decodedToken);
                setCheckAdmin(decodedToken.role);
            } catch (error) {
                console.error("Ошибка декодирования токена:", error);
            }
        } else {
            console.log("Токен пользователя не определён");
        }

    }, [user]);

    function input() {
        localStorage.setItem("TestData", JSON.stringify({ text: "Admin" }));
        console.log("Тестовые данные записаны");
    }

    function output() {
        if (serverData && serverData.length > 0) {
            console.log("Данные сервера:", serverData[0]["name"]);
        } else {
            console.log("Нет данных для отображения");
        }
    }

    function exit() {
        console.log("Тестовые данные удалены");
        localStorage.removeItem("TestData");
        setCheckAdmin(null);
    }

    const selectFile = (e) => {
        console.log(e.target.files);
        setFiles(e.target.files[0]);
    }

    return (
        <div>
            <button onClick={input}> Войти </button>
            <button onClick={output}> Вывести </button>
            <button onClick={exit}> Выйти </button>
            { checkAdmin == "Administration" ? (
                <div>
                    <p>Здрасвуйте</p>
                    <input type="file" onChange={selectFile}></input>
                    <button>Отправить данные</button>
                </div>
            ) : (
                <div>Вы попали сюда по ошибке</div>
            )}
            <h1> Админка </h1>
        </div>
    )
}

export default Admin;
