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
        Long-Term Objective
      </DrawerHeadingWithCaption>
      <DrawerText>
        The long-term objective for this indicator is a value of{" "}
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
        <DrawerHeading>Reference</DrawerHeading>
        <DrawerText>{indicator.reference}</DrawerText>
      </DrawerSection>
    </Linkify>
  </>
);

export default IndicatorMetadata;
