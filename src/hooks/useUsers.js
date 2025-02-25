import { useReducer, useState } from "react"
import { userReducer } from "../components/reducers/userReducer"
import Swal from "sweetalert2"

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

export const useUsers = () => {
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
            let type = user.id === 0 ? 'addUser' : 'updateUser';
            dispatch({
                type,
                payload: user
            })
            Swal.fire(
                (user.id === 0) ? 'Usuario Creado' : 'Usuario Actualizado',
                (user.id === 0) ? 'Usuario ha sido creado con éxito' : 'Usuario ha sido actualizado con éxito',
                'success'
            )
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
        Swal.fire({
            title: "¿Estás seguro (a)?",
            text: "¡No podrás deshacer esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'deleteUser',
                    id
                })
                Swal.fire({
                    title: "¡Usuario eliminado!",
                    text: "El usuario ha sido eliminado.",
                    icon: "success"
                });
            }
        });

    }

    return {
        userSelected,
        validNewUser,
        initialUserForm,
        users,

        handleAddUser,
        handleRemoveUser,
        handleUserSelectedForm
    }
}
