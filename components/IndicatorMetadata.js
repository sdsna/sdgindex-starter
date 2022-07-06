import Linkify from "react-linkify";
import ExternalLink from "components/ExternalLink";
import DrawerSection from "components/DrawerSection";
import DrawerHeading from "components/DrawerHeading";
import DrawerHeadingWithCaption from "components/DrawerHeadingWithCaption";
import DrawerText from "components/DrawerText";

const IndicatorMetadata = ({ indicator, drawerSectionProps = false }) => (
  <>
    <DrawerSection {...drawerSectionProps}>
      <DrawerHeading>Description</DrawerHeading>
      <DrawerText>{indicator.description}</DrawerText>
    </DrawerSection>
    <DrawerSection {...drawerSectionProps}>
      <DrawerHeadingWithCaption caption={indicator.longTermObjectiveReason}>
        Objectif à long terme
      </DrawerHeadingWithCaption>
      <DrawerText>
        L&apos;objectif à long terme pour cet indicateur est une valeur de{" "}
        {indicator.longTermObjective}.
      </DrawerText>
    </DrawerSection>
    <Linkify
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <ExternalLink href={decoratedHref} key={key}>
          {decoratedText}
        </ExternalLink>
      )}
    >
      <DrawerSection {...drawerSectionProps}>
        <DrawerHeading>Référence</DrawerHeading>
        <DrawerText>{indicator.reference}</DrawerText>
      </DrawerSection>
    </Linkify>
  </>
);

export default IndicatorMetadata;
