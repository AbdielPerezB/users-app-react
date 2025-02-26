import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/layout/NavBar"
import UsersPage from "../pages/UsersPages"

//Todas estas rutas son las privadas, es decir,
//el usuario necesita estar logueado para que funcione
export const UserRouters = ({handleLogout, login}) => {
    return (
        <>
            <NavBar
                handleLogout={handleLogout}
                login={login} />
            <Routes>
                <Route path="users" element={<UsersPage />} />
                <Route path="/*" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}
