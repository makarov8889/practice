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
                setServerData(response.data);
                console.log(serverData);
            });
    }, [])

    return (
        <div>
            <div>ПРОФИЛЬ</div>
            {/* <button onClick={exit}>Выйти</button> */}

            
        </div>
    )
}

export default Profile;