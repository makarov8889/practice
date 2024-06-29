import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";

function Profile() {

    const [serverData, setServerData] = useState(false);

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
    }, [])

    function input() {
        window.location.href=('/')
    }

    return (
        <div>
            <button onClick={input}>Войти</button>
            <button >Зарегестрироваться</button>
            {/* <button onClick={exit}>Выйти</button> */}

            
        </div>
    )
}

export default Profile;