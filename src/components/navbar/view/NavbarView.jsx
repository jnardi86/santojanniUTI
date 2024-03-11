import { Link } from "react-router-dom"

const NavbarView = () => {
  return (
    <div>
      <Link to="/login">
        <button type="button" className=" bg-Blue border-solid border-2 border-Blue text-White">
          Sign In/Sign Up
        </button>
      </Link>
    </div>
  )
}

export default NavbarView