import { useContext, useState } from "react"
import Swal from "sweetalert2"
import { AuthContext } from "../context/AuthContext"
const initialLoginForm = {
    username: '',
    pass: ''
}
export const LoginPage = () => {
    const { handleLogin } = useContext(AuthContext)
    const [loginForm, setLoginForm] = useState(initialLoginForm)
    const { username, pass } = loginForm

    const onInputChange = ({ target: { name, value } }) => {
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()

        //Validamos
        if (!username || !pass) {
            Swal.fire(
                'Error de validacion',
                'Username y password requeridos',
                'error'
            )
        }

        //login logic
        handleLogin({ username, pass })
    }

    return (
        <>
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login Page</h5>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control my-3 w-75"
                                    placeholder="username"
                                    name="username"
                                    value={username}
                                    onChange={onInputChange}
                                />
                                <input
                                    type="password"
                                    className="form-control my-3 w-75"
                                    placeholder="Password"
                                    name="pass"
                                    value={pass}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
