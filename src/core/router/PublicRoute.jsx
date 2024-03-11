import { useAuth } from "../../auth/hooks/useAuth"
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {

  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return <Navigate to='/user' />
  }

  return children;
}

export default PublicRoute