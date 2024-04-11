import { useReducer } from 'react'
import { AuthContext } from "./AuthContext"
import { AUTH_KEY_LOCAL_STORAGE, AUTH_TYPES, authInitialState, authInitializer, authReducer } from '../reducer/authReducer';
import { auth } from "../../core/config/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification} from "firebase/auth";


const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(
    authReducer,
    authInitialState,
    authInitializer
  );


  const login = (user) => {

    localStorage.setItem(
      AUTH_KEY_LOCAL_STORAGE, JSON.stringify({
        isLoggedIn: true,
        user: user
      })
    )

    dispatch({
      type: AUTH_TYPES.LOGIN,
      payload: user,
    })

  };

  const logout = (user) => {
    localStorage.setItem(
      AUTH_KEY_LOCAL_STORAGE, JSON.stringify({
        isLoggedIn: false,
      })
    )

    dispatch({
      type: AUTH_TYPES.LOGOUT,
      payload: user,
    })
  }



  const signUp = async (email, password) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(auth.currentUser)
    return response;
  }

  const signIn = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  }

  //Deslogueo de Firebase
  const signOut = async (auth) => {

    const response = await signOut(auth);
    console.log(response);
  }



  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        isLoggedIn: authState.isLoggedIn,
        login,
        logout,
        signUp,
        signIn,
        signOut
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider