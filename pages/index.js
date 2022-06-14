import Link from "next/link";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Fade from "react-reveal/Fade";
import { keyframes } from "@emotion/react";
import { REPORT_DOWNLOAD_URL } from "root/config";
import AppLayout from "layouts/AppLayout";
import FeatureBanner from "components/FeatureBanner";
import ParticlesSection from "components/ParticlesSection";
import { trackDownload } from "helpers/gtag";

const transition = "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

const Background = (props) => <Box bgcolor="#eee" {...props} />;
const Highlight = (props) => (
  <Box component="span" color="#66badeff" {...props} />
);
const Hero = (props) => <Box paddingY={{ xs: 4, md: 0 }} {...props} />;

const moveUpDownAnimation = keyframes`
  60% { top: 0px; }
  70% { top: -5px; }
  90% { top: -5px; }
  100% { top: 0px; }
`;

const ReportButton = (props) => (
  <Box
    component={ButtonBase}
    alignSelf={{ xs: "start", md: "center" }}
    justifySelf="center"
    position="relative"
    sx={{
      boxShadow: 15,
      transition: `box-shadow ${transition}, transform ${transition}, top ${transition}`,
      animation: {
        md: `${moveUpDownAnimation} 10s linear infinite`,
      },
      ":hover": {
        boxShadow: 20,
        top: 0,
        transform: "scale(1.10)",
        animation: "none",
      },
      img: {
        display: "block",
        maxWidth: { xs: "20vh", md: "100%" },
        maxHeight: "60vh",
      },
    }}
    {...props}
  />
);

const Title = (props) => (
  <Typography
    color="#0073b0ff"
    fontWeight={700}
    lineHeight={1.1}
    variant="h1"
    gutterBottom
    {...props}
  />
);
const Subtitle = (props) => (
  <Typography
    color="#0073b0ff"
    fontWeight={500}
    lineHeight={1.2}
    variant="h2"
    {...props}
  />
);

const Index = () => (
  <AppLayout>
    <Background>
      <ParticlesSection />
      <Container style={{ position: "relative" }}>
        <Hero
          paddingY={16}
          display="flex"
          flexDirection="column"
          textAlign="left"
          justifyContent="center"
          style={{ minHeight: "calc(100vh - 300px)" }}
        >
          <Grid container spacing={4}>
            <Grid item lg={5} md={4} xs={12}>
              <Box
                display="flex"
                justifyContent={{
                  xs: "center",
                  md: "flex-start",
                }}
              >
                <ReportButton
                  href={REPORT_DOWNLOAD_URL}
                  target="_blank"
                  onClick={() => trackDownload(REPORT_DOWNLOAD_URL)}
                >
                  <img
                    src="/static/report-cover.webp"
                    alt="Cover of the Benin Sustainable Development Report"
                  />
                </ReportButton>
              </Box>
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems={{ xs: "center", md: "flex-start" }}
                height="100%"
                textAlign={{ xs: "center", md: "unset" }}
              >
                <Box>
                  <Title>
                    <Highlight>Benin</Highlight> Sustainable Development Report
                  </Title>
                  <Subtitle>/TODO</Subtitle>
                </Box>
                <Box
                  marginTop={3}
                  display="flex"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <Box marginY={1} marginRight={2}>
                    <Link href="/chapters" passHref>
                      <Button size="large" variant="contained">
                        Read Report
                      </Button>
                    </Link>
                  </Box>
                  <Box marginY={1}>
                    <Link href="/map" passHref>
                      <Button
                        size="large"
                        variant="outlined"
                        style={{ color: "#0073b0ff", borderColor: "#0073b0ff" }}
                      >
                        Explore Data
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Hero>
        <Box marginY={8}>
          <Fade left>
            <FeatureBanner
              title="Benin Sustainable Development Report"
              image="/static/report-cover.webp"
              imagePosition="right"
              imageOrientation="vertical"
              links={[
                {
                  label: "Executive Summary",
                  href: "/chapters/executive-summary",
                },
                {
                  label: "All Chapters",
                  href: "/chapters",
                  variant: "outlined",
                },
              ]}
            >
              /TODO
            </FeatureBanner>
          </Fade>
        </Box>
        <Box marginY={8}>
          <Fade right>
            {/* FeatureBanner icons from:  */}
            {/* https://drawkit.com/free-icons */}
            <FeatureBanner
              title="View Rankings & Scores"
              image="/static/icons/trophy.svg"
              imagePosition="left"
              links={[
                {
                  label: "View Rankings",
                  href: "/rankings",
                },
              ]}
            >
              /TODO
            </FeatureBanner>
          </Fade>
        </Box>
        <Box marginY={8}>
          <Fade left>
            <FeatureBanner
              title="Explore Interactive Maps"
              image="/static/icons/map.svg"
              imagePosition="right"
              links={[
                {
                  label: "Explore Maps",
                  href: "/map",
                },
              ]}
            >
              /TODO
            </FeatureBanner>
          </Fade>
        </Box>
        <Box marginY={8}>
          <Fade right>
            <FeatureBanner
              title="Analyze State Profiles"
              image="/static/icons/indicator.svg"
              imagePosition="left"
              links={[
                {
                  label: "Analyze Profiles",
                  href: "/profiles",
                },
              ]}
            >
              /TODO
            </FeatureBanner>
          </Fade>
        </Box>

        <Box marginY={8}>
          <Fade right>
            <FeatureBanner
              title="Download Report & Materials"
              image="/static/icons/download.svg"
              imagePosition="left"
              links={[
                {
                  label: "Download Report (PDF)",
                  href: REPORT_DOWNLOAD_URL,
                  target: "_blank",
                  onClick: () => trackDownload(REPORT_DOWNLOAD_URL),
                },
                {
                  label: "Go to Downloads",
                  href: "/downloads",
                  variant: "outlined",
                },
              ]}
            >
              The entire report, datasets, and any additional materials are
              available free of charge and can be downloaded from our website.
              This includes our full report in PDF format, our Excel database
              with scores, ratings, trends, and raw values, our codebook, our
              methodology, and much more.
            </FeatureBanner>
          </Fade>
        </Box>
      </Container>
    </Background>
  </AppLayout>
);

export default Index;
