import { useState } from "react";

const initialUserForm = {
    username: '',
    pass: '',
    email:''
};

export const UserForm = () => {
    const [userForm, setUserForm] = useState(initialUserForm);
    const {username, pass, email} = userForm;

    const onInputChange = ({target: {name, value}}) => {
        setUserForm({
            ...userForm,
            [name]: value
        })

    };
    const oonSubmit = (event) => {
        event.preventDefault() 

        //Guardar los datos bien

        setUserForm(initialUserForm)
    }
    return (
        <form onSubmit={(event) => oonSubmit(event)}>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(event) => onInputChange(event)}
            />
            <input
                type="password"
                className="form-control my-3 w-75"
                placeholder="Password"
                name="pass"
                value={pass}
                onChange={(event) => onInputChange(event)}
            />
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(event) => onInputChange(event)}
            />
            <button
                className="btn btn-primary"
                type="submit"
            >
                Create
            </button>
        </form>
    )
}
