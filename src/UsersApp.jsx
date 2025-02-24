import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

const UsersApp = () => {
  const initialUsers = [
    {
      id: 1,
      username: "Abdiel",
      pass: "12345",
      email: "abdiel@correo.com"
    }
  ]
  return (
    <div className="my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm />
        </div>
        <div className="col">
          <UsersList users={initialUsers}/>
        </div>
      </div>
    </div>
  )
}

export default UsersApp;
