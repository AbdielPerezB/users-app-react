import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"

export const NavBar = () => {
    const { login, handleLogout } = useContext(AuthContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Users App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/users'>Usuarios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/users/register'>Registrar</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                        <span className="nav-item nav-link text-primary mx-3">{login.user?.username}</span>
                        <button
                            className="btn btn-outline-success"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
