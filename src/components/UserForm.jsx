import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ userSelected, handleCloseForm }) => {

    const { handleAddUser, validNewUser, initialUserForm, showDatosInvalidosAlert } = useContext(UserContext)
    const [userForm, setUserForm] = useState(initialUserForm);
    const { id, username, pass, email } = userForm;

    const onInputChange = ({ target: { name, value } }) => {
        setUserForm({
            ...userForm,
            [name]: value
        })

    };
    const oonSubmit = (event) => {
        event.preventDefault()
        //Guardamos
        handleAddUser(userForm)
        setUserForm(initialUserForm)//limpiamos los campos del form
    }

    //Para update user
    useEffect(() => {
        setUserForm(userSelected)

    }, [userSelected])

    useEffect(()=>{
        showDatosInvalidosAlert(false)
    },[])
    return (
        <>
            <form onSubmit={(event) => oonSubmit(event)}>
                <input
                    className="form-control my-3 w-75"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(event) => onInputChange(event)}
                />
                {id > 0 ? '' :
                    <input
                        type="password"
                        className="form-control my-3 w-75"
                        placeholder="Password"
                        name="pass"
                        value={pass}
                        onChange={(event) => onInputChange(event)}
                    />
                }
                <input
                    className="form-control my-3 w-75"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(event) => onInputChange(event)}
                />
                <input
                    type="hidden"
                    name="id"
                    value={id}
                />
                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    {id > 0 ? 'Editar' : 'Create'}
                </button>
                {
                    !handleCloseForm ||
                    <button
                        className="btn btn-primary mx-2"
                        onClick={handleCloseForm}
                    >
                        Cerrar
                    </button>
                }
            </form>
            {validNewUser ? ''
                :
                <div className="alert alert-warning my-3">Datos no válidos!</div>
            }
        </>
    )
}
