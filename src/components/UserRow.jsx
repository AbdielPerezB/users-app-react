export const UserRow = ({ user, handleRemoveUser, handleUserSelectedForm}) => {
    const { id, username, email} = user
    
    return (
        <>
            <tr     >
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <button
                        className="btn btn-secondary"
                        onClick={()=> handleUserSelectedForm(user)}
                    >
                        Update
                    </button>
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
