import { useUsers } from "../hooks/useUsers"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
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
        handleCloseForm,
        showDatosInvalidosAlert
    } = useUsers()
    return (
        <UserContext.Provider value={
            {
                userSelected,
                validNewUser,
                initialUserForm,
                users,
                visibleForm,

                handleAddUser,
                handleRemoveUser,
                handleUserSelectedForm,
                handleOpenForm,
                handleCloseForm,
                showDatosInvalidosAlert
            }
        }>
            {children}
            {/* T odos los children van a poder acceder a lo que esta en value */}
        </UserContext.Provider>
    )

}