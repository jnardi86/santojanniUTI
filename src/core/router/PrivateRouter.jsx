import { useAuth } from '../../auth/hooks/useAuth'
import { Navigate } from 'react-router-dom'

const PrivateRouter = () => {

  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/" />;
}

export default PrivateRouter