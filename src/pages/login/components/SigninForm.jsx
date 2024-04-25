import { useState } from "react";
import { useAuth } from "../../../auth/hooks/useAuth"
import CustomButton from "../../../components/customComponents/CustomButton";
import Swal from 'sweetalert2'



const SigninForm = () => {

    const [error, setError] = useState(null);
    const { login, signIn } = useAuth();
    const [forgotPassword, setForgotPassword] = useState(false)

    const showAlertSignInSucces = (email) => {

        Swal.fire({
            title: `Bienvenido ${email} !`,
            background: "#FAFAFA",
            color: "#025951",
            iconColor: "#025951",
            icon: "success",
            width: "36em",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#038C7F"
        });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const { email, password } = Object.fromEntries(form.entries());

        try {
            const response = await signIn(email, password)
            console.log(response)
            if (!response.user.emailVerified) {
                throw new Error("Debes validar el correo.")
            }

            login(email)
            showAlertSignInSucces(email)

        } catch (error) {
            console.log("Error during sign in:", error.message);
            setError(error.message);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div>
                <input
                    type="email"
                    name="email"
                    className='w-full font-poppins font-medium text-lg text-DarkGreen border-none rounded-md px-2 py-2 mb-2'
                    placeholder="Correo electrónico"
                    required />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    className='w-full font-poppins font-medium text-lg text-DarkGreen border-none rounded-md px-2 py-2 mb-5'
                    placeholder="Contraseña"
                    required
                />
            </div>
            <div className="w-full flex justify-center">
                <CustomButton
                    type={"submit"}
                    label={"Iniciar Sesión"}
                    style={"bg-Blue py-2 px-4 text-White font-poppins font-semiBold text-lg rounded-lg hover:bg-White hover:text-DarkGreen focus:outline-none focus:shadow-outline"}
                >
                </CustomButton>
            </div>
        </form >
    )
}

export default SigninForm