import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";



const UsersApp = () => {
  const {
    userSelected,
    validNewUser,
    initialUserForm,
    users,
  
    handleAddUser,
    handleRemoveUser,
    handleUserSelectedForm
  } = useUsers()

  return (
    <div className="my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm
            handleAddUser={(user) => handleAddUser(user)}
            userSelected={userSelected}
            validNewUser={validNewUser}
            initialUserForm={initialUserForm}
          />
        </div>
        <div className="col">
          {
            users.length > 0 ?
              <UsersList
                users={users}
                handleRemoveUser={handleRemoveUser}
                handleUserSelectedForm={handleUserSelectedForm} />
              :
              <div className="alert alert-warning">No hay usuarios en el sistema!</div>
          }
        </div>
      </div>
    </div>
  )
}

export default UsersApp;
