import { useAuth } from "../../../auth/hooks/useAuth"


const SigninForm = () => {

    const { login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const { email, password } = Object.fromEntries(form.entries());
        login({
            email: email,
        });
    }


  return (
    <form onSubmit={handleSubmit}>
    <div>
        Email
        <input type="email" name="email" className='border-solid border-2 border-Blue' required />
    </div>
    <div>
        Password
        <input type="password" name="password" className='border-solid border-2 border-Blue' required />
    </div>
    <button type="submit" className='border-solid border-2 border-Blue'>
        Iniciar Sesión
    </button>
</form>
  )
}

export default SigninForm