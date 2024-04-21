import { useModulos } from "../../../../hooks/useModulos";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

const ContentsHero = () => {
  const { desktopView } = useModulos();

  return desktopView ? <DesktopContent /> : <MobileContent />;
};

export default ContentsHero;