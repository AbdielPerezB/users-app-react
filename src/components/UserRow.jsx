export const UserRow = ({ user: { id, username, email } }) => {
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
                    >
                        Remove
                    </button>
                </td>
            </tr>
        </>
    )
}
