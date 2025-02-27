import { LoginPage } from "./auth/pages/LoginPage";
import { useAuth } from "./auth/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRouters } from "./routes/UserRouters";

const UsersApp = () => {
  const { login, handleLogout, handleLogin } = useAuth()


  return (
    <>
      <Routes>
        {
          login.isAuth ?
            (<Route
              path="/*" element={
                <UserRouters
                  login={login}
                  handleLogout={handleLogout}
                />
              } />
            )
            :
            <>
              <Route
                path="/login"
                element={
                  <LoginPage handleLogin={handleLogin} />
                } />
              <Route
                path="/*"
                element={<Navigate to="/login"/>}
              />
            </>
        }
      </Routes>
    </>
  )
}

export default UsersApp;
