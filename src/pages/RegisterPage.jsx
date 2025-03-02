import { useContext, useEffect, useState } from "react"
import { UserForm } from "../components/UserForm"
import { useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"



export const RegisterPage = () => {
    const { users = [], initialUserForm } = useContext(UserContext)
    //al asignar un valor por defecto a users, [], 
    //nos aseguramos que no de undefined si es que esta parametro
    //no llega del padre por los props
    const [userSelected, setUserSelected] = useState(initialUserForm)

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const user = users.find(u => u.id == id) || initialUserForm
            setUserSelected(user)
        }
    }, [id])
    return (
        <>
            <div className="container my-4">
                <h4>{userSelected.id > 0 ? 'Editar usuario' : 'Registrar usuario'}</h4>
                <div className="row">
                    <div className="col">
                        <UserForm userSelected={userSelected} />
                    </div>
                </div>
            </div>
        </>
    )
}
