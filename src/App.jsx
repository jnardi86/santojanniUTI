import { RouterProvider } from "react-router-dom"
import { appRouter } from "./core/router/AppRouter"
// import AuthProvider from "./auth/context/AuthProvider"
import RootProvider from "./core/providers/RootProvider"


const App = () => {

  return (
      <RootProvider>
        <RouterProvider router={appRouter} />
      </RootProvider>
    )
}

export default App
