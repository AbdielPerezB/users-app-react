import { useState } from "react"
import { UserForm } from "../components/UserForm"



export const RegisterPage = ({handleAddUser, validNewUser, initialUserForm}) => {
    const [userSelected, setUserSelected] = useState(initialUserForm)


    return (
        <>
            <div className="container my-4">
                <h4>Registro de usuarios</h4>
                <div className="row">
                    <div className="col">
                        <UserForm
                            userSelected={userSelected}
                            handleAddUser={handleAddUser}
                            validNewUser={validNewUser}
                            initialUserForm={initialUserForm}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
