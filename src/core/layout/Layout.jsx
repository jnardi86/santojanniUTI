import FooterView from "../../components/footer/view/FooterView"
import NavbarView from "../../components/navbar/view/NavbarView"


const Layout = ({children}) => {
  return (
    <div>
        <NavbarView/>
        {children}
        <FooterView/>
    </div>
  )
}

export default Layout