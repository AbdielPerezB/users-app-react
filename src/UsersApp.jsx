import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRouters } from "./routes/UserRouters";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";

const UsersApp = () => {

  const { login } = useContext(AuthContext)
  return (
    <>
      <Routes>
        {
          login.isAuth ?
            (<Route path="/*" element={<UserRouters />} />)
            :
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </>
        }
      </Routes>
    </>
  )
}

export default UsersApp;
