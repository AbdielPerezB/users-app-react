import { useReducer } from "react"
import Swal from "sweetalert2"
import { loginReducer } from "../Reducers/LoginReducer"
import { loginUser } from "../services/authService"

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}

export const useAuth = () => {
    //Utilizamos el reduces del login
    const [login, dispatch] = useReducer(loginReducer, initialLogin)

    const handleLogin = ({ username, pass }) => {
        const isLogin = loginUser({ username, pass })
        if (isLogin) {
            const user = { username: 'admin' } //Esto normalmente es un token y viene del backend
            dispatch({
                type: 'login',
                payload: user
            })
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
            }))
        } else {
            Swal.fire(
                'Error de validacion',
                'Username o password inválidos',
                'error'
            )
        }
    }
    const handleLogout = () => {
        dispatch({
            type: 'logout'
        })
        sessionStorage.removeItem('login')
    }
    return {
        login,
        handleLogout,
        handleLogin

    }
}
