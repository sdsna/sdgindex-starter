import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Box, Typography } from "@mui/material";
import urlSlug from "url-slug";
import { useReportStore } from "stores/reportStore";
import ReportAnchor from "components/ReportAnchor";
import childrenToString from "helpers/childrenToString";

const ReportHeading = observer(({ children, slug, variant = "h1" }) => {
  const reportStore = useReportStore();

  const label = childrenToString(children);
  const anchor = slug || urlSlug(label);

  useEffect(() => {
    reportStore.addItem({
      label,
      anchor,
      indent: variant !== "h1",
      type: "heading",
    });

    return () => reportStore.removeItem(anchor);
  }, []);

  return (
    <Box marginY={4}>
      <ReportAnchor anchor={anchor}>
        <Typography variant={variant} color="primary">
          {children}
        </Typography>
      </ReportAnchor>
    </Box>
  );
});

export default ReportHeading;
