import { useReducer, useState } from "react";
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
//Para utilizarse en userSelected al principio
const initialUserForm = {
  id: 0,
  username: "",
  pass: "",
  email: ""
}
const UsersApp = () => {
  const [users, dispatch] = useReducer(userReducer, initialUsers)

  //Add user
  const [validNewUser, setValidNewUser] = useState(true)
  const validateNewUser = (user) => {
    return user.username && user.email && (user.pass || user.id !== 0) 
  }
  const handleAddUser = (user) => {
    if (validateNewUser(user)) {
      setValidNewUser(true)

      //validate if add or update
      let type;
      if (user.id === 0) {
        type = 'addUser'
      } else {
        type = 'updateUser'
      }
      dispatch({
        type, 
        payload: user
      })
    } else {
      setValidNewUser(false)
    }
  }

  //Update user
  const [userSelected, setUserSelected] = useState(initialUserForm)
  const handleUserSelectedForm = (user) => {
    // console.log(user)
    setUserSelected({ ...user })
  }
  //Remove user
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
          <UserForm
            handleAddUser={(user) => handleAddUser(user)}
            userSelected={userSelected}
            validNewUser={validNewUser}
            initialUserForm = {initialUserForm}
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
