export const LoginPage = () => {
    return (
        <>
            <div className="modal" style={{display: "block"}} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login Page</h5>
                        </div>
                        <form action="">
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control my-3 w-75"
                                    placeholder="username"
                                    name="username"
                                />
                                <input
                                    type="password"
                                    className="form-control my-3 w-75"
                                    placeholder="Password"
                                    name="pass"
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
