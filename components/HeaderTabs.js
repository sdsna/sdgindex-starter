import { Tab, Tabs } from "@mui/material";
import TabWithLink from "components/TabWithLink";

const HeaderTabs = ({ tabs, activeTab }) => {
  if (tabs == null) return null;

  return (
    <Tabs value={activeTab}>
      {tabs.map(({ label, href }) => (
        <Tab key={label} label={label} component={TabWithLink} href={href} />
      ))}
    </Tabs>
  );
};

export default HeaderTabs;
