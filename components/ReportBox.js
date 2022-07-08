import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Box, Card, CardContent, Typography } from "@mui/material";
import urlSlug from "url-slug";
import { useReportStore } from "stores/reportStore";
import ReportAnchor from "components/ReportAnchor";

const ReportBox = observer(({ title, number, source, children }) => {
  const reportStore = useReportStore();

  const label = `Box ${number}. ${title}`;
  const anchor = urlSlug(label);

  useEffect(() => {
    reportStore.addItem({
      label,
      anchor,
      type: "box",
    });

    return () => reportStore.removeItem(anchor);
  }, []);

  return (
    <Box marginY={4}>
      <Card style={{ background: "#f3f3fa" }}>
        <CardContent>
          <ReportAnchor anchor={anchor}>
            <Typography variant="body1" color="primary">
              {label}
            </Typography>
          </ReportAnchor>
          {children}
          {source && (
            <Typography variant="caption">Source: {source}</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
});

export default ReportBox;
