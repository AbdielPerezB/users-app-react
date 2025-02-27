import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/layout/NavBar"
import UsersPage from "../pages/UsersPages"
import { RegisterPage } from "../pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"

//Todas estas rutas son las privadas, es decir,
//el usuario necesita estar logueado para que funcione
export const UserRouters = ({ handleLogout, login }) => {
    const {
        userSelected,
        validNewUser,
        initialUserForm,
        users,
        visibleForm,

        handleAddUser,
        handleRemoveUser,
        handleUserSelectedForm,
        handleOpenForm,
        handleCloseForm
    } = useUsers()
    return (
        <>
            <NavBar
                handleLogout={handleLogout}
                login={login} />
            <Routes>
                <Route path="users" element={<UsersPage
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    visibleForm={visibleForm}
                    handleAddUser={handleAddUser}
                    handleRemoveUser={handleRemoveUser}
                    handleUserSelectedForm={handleUserSelectedForm}
                    handleOpenForm={handleOpenForm}
                    handleCloseForm={handleCloseForm}
                    validNewUser={validNewUser}

                />} />
                <Route path="users/register" element={<RegisterPage
                    handleAddUser={handleAddUser}
                    validNewUser={validNewUser}
                    initialUserForm={initialUserForm} />} />
                <Route path="/*" element={<Navigate to="/users" />} />
                <Route path={"users/edit/:id"} element={<RegisterPage
                    users={users}
                    handleAddUser={handleAddUser}
                    validNewUser={validNewUser}
                    initialUserForm={initialUserForm} />} />
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}
