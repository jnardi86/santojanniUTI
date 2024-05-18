import { useModulos } from "../../../hooks/useModulos"
import FooterDesktop from "../components/FooterDesktop"
import FooterMobile from "../components/FooterMobile"
import Location from "../../svg/Location"
import Phone from "../../svg/Phone"
import Email from "../../svg/Email"
import footerImageMobile from "/Images_figma/footer_mobile_max.png"
import footerImageDesktop from "/Images_figma/footer_desktop_max.png"

const footerData = {
  footerImageMobile: footerImageMobile,
  footerImageDesktop: footerImageDesktop,
  Location: Location,
  infoLocation: "Pilar 950 CABA",
  Phone: Phone,
  infoContact: "4630-5500",
  Email: Email,
  infoEmail: "campus@utisantojanni.com",
  InfoWeb: "Desarrollado por Hornero Web"
}

const FooterView = () => {

  const { desktopView } = useModulos()

  return (
    <div className="container max-w-[1440px] mx-auto">
      {desktopView ?
        <FooterDesktop {...footerData} />
        :
        <FooterMobile {...footerData} />
      }
    </div>
  );

}

export default FooterView