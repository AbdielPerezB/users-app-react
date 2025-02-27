import { useContext } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";

const UsersPage = () => {

  const {
    users,
    visibleForm,  
    handleRemoveUser,
    handleUserSelectedForm,
    handleOpenForm,
  } = useContext(UserContext)

  return (
    <>
      {
        !visibleForm ||
        <UserModalForm />
      }
      <div className="my-4">
        <h2>Users App</h2>
        <div className="row">
          <div className="col">
            {visibleForm ||
              <button
                className="btn btn-primary my-3"
                onClick={handleOpenForm}
              >
                NUevo Usuario
              </button>
            }
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
    </>
  )
}

export default UsersPage;
