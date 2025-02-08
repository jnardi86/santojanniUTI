import { useAuth } from "../../auth/hooks/useAuth"
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {

  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return <Navigate to='/home' />
  }

  return children;
}

export default PublicRoute