import React, { useContext, useState } from "react";
import { backend_login, backend_registration } from "../../http/userApi";
import { useNavigate, useLocation } from "react-router-dom";
import { AUTORIZATION_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react";
import { Context } from "../..";
import { toJS } from "mobx";

const userRoles = {
    "user": "Person",
    "seller": "Seller",
    "admin": "Administration"
}

const Auth = observer(() => {
    const location = useLocation();
    const LoginPage = location.pathname === AUTORIZATION_ROUTE;
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const { user } = useContext(Context);

    const role = userRoles["admin"];

    const click = async (e) => {
        e.preventDefault();
        try {
            let data;
            if (LoginPage) {
                data = await backend_login(mail, password);
            } else {
                data = await backend_registration(name, surname, mail, password, role);
            }
            user.setUser(data);
            user.setIsAuth(true);
            const userData = toJS(user.user);
            console.log("Данные пользователя -", userData.data);

            localStorage.setItem("token", JSON.stringify({token: userData.data.token}));

            navigate(MAIN_ROUTE);
        } catch (e) {
            console.error(e);
            if (e.response && e.response.data && e.response.data.message) {
                alert(e.response.data.message);
            } else {
                console.log(e);
                alert("Произошла непредвиденная ошибка при передаче данных.");
            }
        }
    };

    return (
        <div>
            {LoginPage ? (
                <div>
                    <div className="auth">
                        <form className="auth__form">
                            <input type="email" className="auth__form__input" placeholder="Введите почту" value={mail} onChange={e => setMail(e.target.value)} />
                            <input type="password" className="auth__form__input" placeholder="Введите пароль" value={password} onChange={e => setPassword(e.target.value)} />
                            <button className="btn auth-btn" onClick={click}>Войти</button>
                        </form>
                    </div>
                    <button onClick={() => { navigate(REGISTRATION_ROUTE); }}>Зарегистрироваться</button>
                </div>

            ) : (
                
                <div className="reg">
                    <form id="registration" className="reg__form">
                        <input type="text" className="reg__form__input" placeholder="Введите имя" value={name} onChange={e => setName(e.target.value)} />
                        <input type="text" className="reg__form__input" placeholder="Введите фамилию" value={surname} onChange={e => setSurname(e.target.value)} />
                        <input type="email" className="reg__form__input" placeholder="Введите почту" value={mail} onChange={e => setMail(e.target.value)} />
                        <input type="password" className="reg__form__input" placeholder="Введите пароль" value={password} onChange={e => setPassword(e.target.value)} />
                        <button className="btn reg-btn" onClick={click}>Готово</button>
                    </form>
                    <button onClick={() => { navigate(AUTORIZATION_ROUTE); }}>Войти</button>
                </div>
            )}
        </div>
    );
});

export default Auth;
