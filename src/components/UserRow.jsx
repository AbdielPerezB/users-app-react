export const UserRow = ({ user: { id, username, email }, handleRemoveUser }) => {
    const onDeleteUser = (id) => {
        handleRemoveUser(id)
    }
    return (
        <>
            <tr     >
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <button
                        className="btn btn-secondary"
                    >
                        Update
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => onDeleteUser(id)}
                    >
                        Remove
                    </button>
                </td>
            </tr>
        </>
    )
}
