import { useState } from "react";
import { useAuth } from "../../../auth/hooks/useAuth"
import CustomButton from "../../../components/customComponents/CustomButton";


const SigninForm = () => {

    const [error, setError] = useState(null);
    const { login, signIn } = useAuth();
    const [forgotPassword, setForgotPassword] = useState(false)


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

            login({
                email,
            })

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
                    className='w-full border-none px-2 py-2 mb-2'
                    placeholder="Correo electrónico"
                    required />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    className='w-full border-none px-2 py-2 mb-5'
                    placeholder="Contraseña"
                    required />
            </div>
            <div className="w-full  flex justify-center">
                <CustomButton
                    type={"submit"}
                    label={"Iniciar Sesión"}>
                </CustomButton></div>
        </form >
    )
}

export default SigninForm