import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/layout/NavBar"
import UsersPage from "../pages/UsersPages"
import { RegisterPage } from "../pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"
import { UserProvider } from "../context/UserProvider"

//Todas estas rutas son las privadas, es decir,
//el usuario necesita estar logueado para que funcione
export const UserRouters = ({ handleLogout, login }) => {

    return (
        <>
            <UserProvider>
                <NavBar
                    handleLogout={handleLogout}
                    login={login} />
                <Routes>
                    <Route path="users" element={<UsersPage />} />
                    
                    <Route path="users/register" element={<RegisterPage />} />

                    <Route path="/*" element={<Navigate to="/users" />} />

                    <Route path={"users/edit/:id"} element={<RegisterPage />} />

                    <Route path="/" element={<Navigate to="/users" />} />

                </Routes>
            </UserProvider>
        </>
    )
}
