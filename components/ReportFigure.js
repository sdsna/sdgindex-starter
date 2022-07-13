import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Box, Typography } from "@mui/material";
import urlSlug from "url-slug";
import { useReportStore } from "stores/reportStore";
import Emphasis from "components/Emphasis";
import ReportAnchor from "components/ReportAnchor";
import toTitleCase from "helpers/toTitleCase";

const ReportFigure = observer(
  ({
    type = "figure",
    format = "svg",
    number,
    title,
    note,
    source,
    margin = true,
    // Additional properties to apply to the figure wrapper
    boxProps = {},
  }) => {
    const reportStore = useReportStore();

    const label = `${toTitleCase(type)} ${number} ${title}`;
    const anchor = urlSlug(label);

    useEffect(() => {
      reportStore.addItem({
        label,
        anchor,
        type,
      });

      return () => reportStore.removeItem(anchor);
    }, []);

    return (
      <Box marginY={margin ? 4 : 0}>
        <ReportAnchor anchor={anchor}>
          <Typography variant="body2">
            <Emphasis primary>
              {toTitleCase(type)} {number}
            </Emphasis>{" "}
            | {title}
          </Typography>
        </ReportAnchor>
        <Box marginY={2} {...boxProps}>
          <SimpleReactLightbox>
            <SRLWrapper
              id={number}
              options={{
                buttons: {
                  showAutoplayButton: false,
                  showThumbnailsButton: false,
                  showNextButton: false,
                  showPrevButton: false,
                },
                thumbnails: {
                  showThumbnails: false,
                },
              }}
              customCaptions={[
                {
                  id: 0,
                  caption: (
                    <Box padding={1} paddingTop={0}>
                      <Typography component="div" variant="body2">
                        <Emphasis>
                          {toTitleCase(type)} {number}
                        </Emphasis>{" "}
                        | {title}
                      </Typography>
                      {note && (
                        <Typography component="div" variant="caption">
                          Note: {note}
                        </Typography>
                      )}
                      {source && (
                        <Typography component="div" variant="caption">
                          Source: {source}
                        </Typography>
                      )}
                    </Box>
                  ),
                },
              ]}
            >
              <img
                loading="lazy"
                src={`/static/chapters/${type}-${number}.${format}`}
                alt={`${toTitleCase(type)} ${number} | ${title}`}
                style={{ cursor: "pointer", maxWidth: "100%" }}
              />
            </SRLWrapper>
          </SimpleReactLightbox>
        </Box>
        {note && <Typography variant="caption">Note: {note}</Typography>}
        {source && <Typography variant="caption">Source: {source}</Typography>}
      </Box>
    );
  }
);

export default ReportFigure;
