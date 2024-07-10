import Admin from "./pages/admin/Admin"
import Auth from "./pages/auth/Auth"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile"
import Reservations from "./pages/Reservations/Reservations"
import ReservationsHistory from "./pages/ReservationsHistory/ReservationsHistory"
import Reserve from "./pages/Reserve/Reserve"
import Restaurants from "./pages/Restaurants/Restaurants"
import RestaurantsList from "./pages/RestaurantsList/RestaurantsList"
import { ADMIN_ROUTE, AUTH_ROUTE, AUTORIZATION_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, RESERVATION_HISTORY_ROUTE, RESERVATION_ROUTE, RESERVE_ROUTE, RESTAURANTS_LIST_ROUTE, RESTAURANTS_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: AUTORIZATION_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: RESERVATION_ROUTE,
        Component: Reservations
    },
    {
        path: RESERVATION_HISTORY_ROUTE,
        Component: ReservationsHistory
    },
    {
        path: RESERVE_ROUTE,
        Component: Reserve
    },
    {
        path: RESTAURANTS_ROUTE,
        Component: Restaurants
    },
    {
        path: RESTAURANTS_LIST_ROUTE,
        Component: RestaurantsList
    }
]