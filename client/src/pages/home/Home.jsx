import React from "react";

function Home() {

    function output() {
        let testData = JSON.parse(localStorage.getItem("TestData"));
        console.log(testData);
        localStorage.removeItem("TestData");
    }

    return (
        <div>
            <h1> Главная </h1>
            <button onClick={output}>Вывести</button>
        </div>
    )
}

export default Home;