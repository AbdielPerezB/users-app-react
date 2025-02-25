import { UserForm } from "./UserForm"

export const UserModalForm = ({
    userSelected,
    validNewUser,
    initialUserForm,
    handleAddUser,
    handleCloseForm
}) => {
    return (
        <>
            <div className="abrir-modal animacion fadeIn">
                <div className="modal" style={{ display: "block" }} tabIndex="-1">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {userSelected.id > 0 ? 'Editar' : 'Crear'} Modal usuarios
                                </h5>
                            </div>
                            <div className="modal-body">
                                <UserForm
                                    handleAddUser={(user) => handleAddUser(user)}
                                    userSelected={userSelected}
                                    validNewUser={validNewUser}
                                    initialUserForm={initialUserForm}
                                    handleCloseForm={handleCloseForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
