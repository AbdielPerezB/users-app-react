import { UserRow } from "./UserRow"

export const UsersList = ({ users, handleRemoveUser, handleUserSelectedForm }) => {
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
                                            handleRemoveUser={handleRemoveUser}
                                            handleUserSelectedForm={handleUserSelectedForm}
                                        />)
                    )}
                </tbody>

            </table>
        </>
    )
}
