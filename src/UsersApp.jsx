import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { userReducer } from "./components/reducers/userReducer";

const initialUsers = [
  {
    id: 1,
    username: "Abdiel",
    pass: "12345",
    email: "abdiel@correo.com"
  }
]
const initialFormUser = {
  id: 1,
  username: "Abdiel",
  pass: "12345",
  email: "abdiel@correo.com"
}
const UsersApp = () => {
  const [users, dispatch] = useReducer(userReducer, initialUsers)

  const handleAddUser = (user) => {
    console.log(user)
    dispatch({
      type: 'addUser',
      payload: user
    })
  }

  const handleRemoveUser = (id) => {
    // console.log('Eliminando id:', id)
    dispatch({
      type: 'deleteUser',
      id
    })
  }

  return (
    <div className="my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm handleAddUser={(user) => handleAddUser(user)} initialFormUser={initialFormUser} />
        </div>
        <div className="col">
          {
            users.length > 0 ?
              <UsersList users={users} handleRemoveUser={handleRemoveUser} />
              :
              <div className="alert alert-warning">No hay usuarios en el sistema!</div>
          }
        </div>
      </div>
    </div>
  )
}

export default UsersApp;
