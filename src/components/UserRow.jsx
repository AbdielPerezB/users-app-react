import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export const UserRow = ({ user }) => {
    const { id, username, email } = user
    const {handleRemoveUser, handleUserSelectedForm } = useContext(UserContext)
    return (
        <>
            <tr     >
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <button
                        className="btn btn-secondary"
                        onClick={() => handleUserSelectedForm(user)}
                    >
                        Update
                    </button>
                </td>
                <td>
                    <NavLink
                        className="btn btn-secondary btn-sm"
                        to={'/users/edit/' + id}
                    >
                        Update route
                    </NavLink>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleRemoveUser(id)}
                    >
                        Remove
                    </button>
                </td>
            </tr>
        </>
    )
}
