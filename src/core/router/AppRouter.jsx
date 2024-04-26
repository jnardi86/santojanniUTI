import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeView from "../../pages/home/view/HomeView";
import LoginView from "../../pages/login/view/LoginView";
import UserView from "../../pages/user/view/UserView";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ContentsView from "../../pages/contents/view/ContentsView";
import ResetPassword from "../../pages/resetPassword/ResetPassword";
import HelpView from "../../pages/help/view/HelpView";


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
        path: "/home",
        element: (
            <PrivateRoute>
                <Layout>
                    <HomeView />
                </Layout>
            </PrivateRoute>
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
            <PrivateRoute>
                <Layout>
                    <UserView />
                </Layout>
            </PrivateRoute>
        ),
    },
    {
        path: "/contents",
        element: (
            <PrivateRoute>
                <Layout>
                    <ContentsView/>
                </Layout>
            </PrivateRoute>
        ),
    },
    {
        path: "/help",
        element: (
            <PublicRoute>
                <Layout>
                    <HelpView/>
                </Layout>
            </PublicRoute>
        ),
    },
    {
        path: "/help",
        element: (
            <PublicRoute>
                <Layout>
                    <ResetPassword/>
                </Layout>
            </PublicRoute>
        ),
    },

    {
        path: "*",
        element: <Navigate to="/" />,
    }

])