import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode"

export const backend_registration = async (name, surname, mail, password, role) => {
    const {data} = await $host.post("api/user/reg", {name, surname, mail, password, role});
    return data.token;
};

export const backend_login = async (mail, password) => {
    const response = $host.post("api/user/log", {mail, password});
    return response;
};

export const backend_check = async () => {
    const response = $host.post("api/user/auth", {});
    return response;
};

export const backend_user_info = async (id) => {
    const response = $authHost.post("api/user/info", {id});
    return response;
};

export const backend_update_img = async (id, img) => {
    const response = $authHost.post("api/user/setImg", {id, img});
    return response;
};

