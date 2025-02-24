import { UserRow } from "./UserRow"

export const UsersList = ({ users, handleRemoveUser}) => {
    return (
        <>
            <p>Listado de usuarios</p>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <UserRow user={user} key={user.id} handleRemoveUser={handleRemoveUser}/>)}
                </tbody>

            </table>
        </>
    )
}
