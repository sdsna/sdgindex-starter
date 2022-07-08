import { observer } from "mobx-react-lite";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useReportStore } from "stores/reportStore";
import useScrollSpy from "hooks/useScrollSpy";

const StyledTab = styled(Tab)(({ styled = {} }) => ({
  textTransform: "none",
  textAlign: "left",
  padding: 6,
  minHeight: 24,
  paddingLeft: styled.indent ? 24 : 6,
  alignItems: "flex-start",
}));

const ReportNavigation = observer(() => {
  const reportStore = useReportStore();
  const headings = reportStore.headings;

  const active = useScrollSpy({ items: headings });
  const activeIndex = active
    ? headings.findIndex((heading) => heading.anchor === active)
    : false;

  return (
    <Box
      position="sticky"
      top={88}
      height="calc(100vh - 88px)"
      marginLeft={4}
      width={256}
      display={{ xs: "none", md: "block" }}
      sx={{
        overflowY: "auto",
        scrollbarWidth: "thin",
      }}
    >
      <Box marginTop={2} />
      {headings.length > 0 && (
        <>
          <Box paddingLeft="6px" marginTop={2} marginBottom={1}>
            <Typography variant="body1">Table of Contents</Typography>
          </Box>
          <Tabs
            orientation="vertical"
            value={activeIndex}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            TabIndicatorProps={{
              style: {
                left: 0,
              },
            }}
          >
            {headings.map((heading, index) => (
              <StyledTab
                key={index}
                href={`#${heading.anchor}`}
                onClick={(e) => {
                  e.preventDefault();

                  document.getElementById(heading.anchor).scrollIntoView({
                    behavior: "smooth",
                  });

                  history.replaceState(null, null, `#${heading.anchor}`);
                }}
                styled={{
                  indent: heading.indent,
                }}
                label={
                  <Typography
                    variant="caption"
                    color={
                      index === activeIndex ? "textPrimary" : "textSecondary"
                    }
                    style={{ lineHeight: 1.2 }}
                  >
                    {heading.label}
                  </Typography>
                }
              />
            ))}
          </Tabs>
        </>
      )}
      {reportStore.figures.length > 0 && (
        <>
          <Box paddingLeft="6px" marginTop={2} marginBottom={1}>
            <Typography variant="body2">Figures</Typography>
          </Box>
          <Tabs orientation="vertical" value={false} variant="scrollable">
            {reportStore.figures.map((figure, index) => (
              <StyledTab
                key={index}
                href={`#${figure.anchor}`}
                onClick={(e) => {
                  e.preventDefault();

                  document.getElementById(figure.anchor).scrollIntoView({
                    behavior: "smooth",
                  });

                  history.replaceState(null, null, `#${figure.anchor}`);
                }}
                label={
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    style={{ lineHeight: 1.2 }}
                  >
                    {figure.label}
                  </Typography>
                }
              />
            ))}
          </Tabs>
        </>
      )}
      {reportStore.tables.length > 0 && (
        <>
          <Box paddingLeft="6px" marginTop={2} marginBottom={1}>
            <Typography variant="body2">Tables</Typography>
          </Box>
          <Tabs orientation="vertical" value={false} variant="scrollable">
            {reportStore.tables.map((table, index) => (
              <StyledTab
                key={index}
                href={`#${table.anchor}`}
                onClick={(e) => {
                  e.preventDefault();

                  document.getElementById(table.anchor).scrollIntoView({
                    behavior: "smooth",
                  });

                  history.replaceState(null, null, `#${table.anchor}`);
                }}
                label={
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    style={{ lineHeight: 1.2 }}
                  >
                    {table.label}
                  </Typography>
                }
              />
            ))}
          </Tabs>
        </>
      )}
      {reportStore.boxes.length > 0 && (
        <>
          <Box paddingLeft="6px" marginTop={2} marginBottom={1}>
            <Typography variant="body2">Boxes</Typography>
          </Box>
          <Tabs orientation="vertical" value={false} variant="scrollable">
            {reportStore.boxes.map((box, index) => (
              <StyledTab
                key={index}
                href={`#${box.anchor}`}
                onClick={(e) => {
                  e.preventDefault();

                  document.getElementById(box.anchor).scrollIntoView({
                    behavior: "smooth",
                  });

                  history.replaceState(null, null, `#${box.anchor}`);
                }}
                label={
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    style={{ lineHeight: 1.2 }}
                  >
                    {box.label}
                  </Typography>
                }
              />
            ))}
          </Tabs>
        </>
      )}
    </Box>
  );
});

export default ReportNavigation;
