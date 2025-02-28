import { useAuth } from "../hooks/useAuth"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }) => {
    const { login, handleLogout, handleLogin } = useAuth()

    return (
        < AuthContext.Provider value={{
            login,
            handleLogout,
            handleLogin
        }}>
            {children}
        </AuthContext.Provider >
    )
}