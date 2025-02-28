import { useContext } from "react"
import { UserRow } from "./UserRow"
import { UserContext } from "../context/UserContext"

export const UsersList = () => {
    const { users } = useContext(UserContext)
    return (
        <>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th> </th> {/*Espacio para el boton de update */}
                        <th> </th> {/*Espacio para el boton de update route */}
                        <th> </th> {/*Espacio para el boton de eliminar */}
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (<UserRow
                        user={user}
                        key={user.id}
                    />)
                    )}
                </tbody>

            </table>
        </>
    )
}
