import { useReducer, useState } from "react"
import { userReducer } from "../components/reducers/userReducer"

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
