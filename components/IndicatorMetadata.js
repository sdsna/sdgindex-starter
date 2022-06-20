import Linkify from "react-linkify";
import ExternalLink from "components/ExternalLink";
import DrawerSection from "components/DrawerSection";
import DrawerHeading from "components/DrawerHeading";
import DrawerHeadingWithCaption from "components/DrawerHeadingWithCaption";
import DrawerText from "components/DrawerText";
import { isOecdOnly, isGlobalOnly } from "@sdgindex/data/assessments";

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
    {isOecdOnly(indicator) && (
      <DrawerSection {...drawerSectionProps}>
        <DrawerHeading>OECD-only</DrawerHeading>
        <DrawerText>This indicator is used for OECD countries only.</DrawerText>
      </DrawerSection>
    )}
    {isGlobalOnly(indicator) && (
      <DrawerSection {...drawerSectionProps}>
        <DrawerHeading>Global-only</DrawerHeading>
        <DrawerText>
          This indicator is used for non-OECD countries only.
        </DrawerText>
      </DrawerSection>
    )}
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
      <DrawerSection {...drawerSectionProps}>
        <DrawerHeading>Source</DrawerHeading>
        <DrawerText>{indicator.link}</DrawerText>
      </DrawerSection>
      {indicator.hasModeledTimeseries && (
        <DrawerSection {...drawerSectionProps}>
          <DrawerHeading>Timeseries Source</DrawerHeading>
          <DrawerText>{indicator.modeledTimeseriesLink}</DrawerText>
        </DrawerSection>
      )}
    </Linkify>
  </>
);

export default IndicatorMetadata;
