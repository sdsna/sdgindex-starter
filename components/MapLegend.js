import DrawerSection from "components/DrawerSection";
import DrawerHeadingWithCaption from "components/DrawerHeadingWithCaption";

const MapLegend = ({ children }) => (
  <DrawerSection>
    <DrawerHeadingWithCaption caption="Cliquez sur un département pour voir ses performances.">
      Légende
    </DrawerHeadingWithCaption>
    {children}
  </DrawerSection>
);

export default MapLegend;
