import { LoginPage } from "./auth/pages/LoginPage";
import UsersPage from "./pages/UsersPages";
import { NavBar } from "./components/layout/NavBar";
import { useAuth } from "./auth/hooks/useAuth";

const UsersApp = () => {
  const { login, handleLogout, handleLogin } = useAuth()


  return (
    <>
      {
        login.isAuth ?
          (<>
            <NavBar
              handleLogout={handleLogout}
              login={login} />
            <UsersPage />
          </>)
          :
          <LoginPage handleLogin={handleLogin} />
      }
    </>
  )
}

export default UsersApp;
