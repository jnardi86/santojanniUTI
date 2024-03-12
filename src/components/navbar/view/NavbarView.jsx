import { Link } from "react-router-dom"
import { useAuth } from "../../../auth/hooks/useAuth"
import { useState } from "react"

const NavbarView = () => {

  const { isLoggedIn, logout, signOut } = useAuth()
  const [showLoginButton, setShowLoginButton] = useState(!isLoggedIn)

  const handleLogout = async () => {
    signOut();
    logout();
  }

  return (
    <div>
      {
        showLoginButton ? (
          <Link to="/login">
            <button type="button" className=" bg-Blue border-solid border-2 border-Blue text-White">
              Sign In/Sign Up
            </button>
          </Link>
        ) : (
          <button
            type="button"
            className=" bg-Blue border-solid border-2 border-Blue text-White"
            onClick={handleLogout}
          >
            Log Out
          </button>
        )}

    </div>
  )
}

export default NavbarView