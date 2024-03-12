import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuth = () => {
    const {
        user,
        isLoggedIn,
        login,
        logout,
        signUp,
        signIn,
        signOut
    } = useContext(AuthContext)

    return {
        user,
        isLoggedIn,
        login,
        logout,
        signUp,
        signIn,
        signOut
    }
}