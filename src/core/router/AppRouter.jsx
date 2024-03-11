import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeView from "../../pages/home/view/HomeView";
import LoginView from "../../pages/login/view/LoginView";
import UserView from "../../pages/user/view/UserView";
import PublicRoute from "./PublicRoute";
import PrivateRouter from "./PrivateRouter";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <PublicRoute>
                <Layout>
                    <HomeView />
                </Layout>
            </PublicRoute>
        ),
    },

    {
        path: "/login",
        element: (
            <PublicRoute>
                <Layout>
                    <LoginView />
                </Layout>
            </PublicRoute>
        ),
    },

    {
        path: "/user",
        element: (
            <PrivateRouter>
                <Layout>
                    <UserView />
                </Layout>
            </PrivateRouter>
        ),
    },

    {
        path: "*",
        element: <Navigate to="/" />,
    }

])