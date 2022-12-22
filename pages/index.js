import Link from "next/link";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Fade from "react-reveal/Fade";
import { keyframes } from "@emotion/react";
import {
  FRENCH_REPORT_DOWNLOAD_URL,
  ENGLISH_REPORT_DOWNLOAD_URL,
} from "root/config";
import AppLayout from "layouts/AppLayout";
import FeatureBanner from "components/FeatureBanner";
import ParticlesSection from "components/ParticlesSection";
import Italics from "components/Italics";
import { trackDownload } from "helpers/gtag";

const transition = "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";

const Banner = styled(Box)`
  background: #ffd700;
  position: relative;
  && {
    z-index: 1;
  }
`;

const Background = (props) => <Box bgcolor="#eee" {...props} />;
const Highlight = (props) => (
  <Box component="span" color="#61b3e3" {...props} />
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
    color="#28547d"
    fontWeight={700}
    lineHeight={1.1}
    variant="h1"
    gutterBottom
    {...props}
  />
);

const Index = () => (
  <AppLayout>
    <Background>
      <Banner paddingY={0.5}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h4">
            The English version of the report is out now. You can find it{" "}
            <Link
              href={ENGLISH_REPORT_DOWNLOAD_URL}
              onClick={() => trackDownload(ENGLISH_REPORT_DOWNLOAD_URL)}
              passHref
            >
              HERE
            </Link>
          </Typography>
        </Box>
      </Banner>
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
                  href={FRENCH_REPORT_DOWNLOAD_URL}
                  target="_blank"
                  onClick={() => trackDownload(FRENCH_REPORT_DOWNLOAD_URL)}
                >
                  <img
                    src="/static/report-cover.png"
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
                    Rapport sur le développement durable pour{" "}
                    <Highlight>le Bénin 2022</Highlight>
                  </Title>
                </Box>
                <Box
                  marginTop={3}
                  display="flex"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <Box marginY={1} marginRight={2}>
                    <Link
                      href={FRENCH_REPORT_DOWNLOAD_URL}
                      legacyBehavior
                      passHref
                    >
                      <Button size="large" variant="contained">
                        Lire le rapport
                      </Button>
                    </Link>
                  </Box>
                  <Box marginY={1}>
                    <Link
                      href="/chapitres/executive-summary"
                      legacyBehavior
                      passHref
                    >
                      <Button
                        size="large"
                        variant="outlined"
                        style={{ color: "#0073b0ff", borderColor: "#0073b0ff" }}
                      >
                        Executive Summary
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
              title="Rapport sur le développement durable pour le Bénin 2022"
              image="/static/report-cover.webp"
              imagePosition="right"
              imageOrientation="vertical"
              links={[
                {
                  label: "Résumé Exécutif",
                  href: "/chapitres/resume-executif",
                },
                {
                  label: "Executive Summary (English)",
                  href: "/chapitres/executive-summary",
                  variant: "outlined",
                },
                {
                  label: "Tous les chapitres",
                  href: "/chapitres",
                },
              ]}
            >
              Le Rapport sur le développement durable pour le Bénin 2022 (
              <Italics>rapport pilote de référence</Italics>) marque la première
              édition de l&apos;évaluation des progrès, performances et
              tendances du Bénin dans l’atteinte des Objectifs de Développement
              Durable. Le rapport analyse aussi les performances du Bénin dans
              la réalisation du principe de « ne laisser personne de côté ».
            </FeatureBanner>
          </Fade>
        </Box>
        <Box marginY={8}>
          <Fade left>
            {/* FeatureBanner icons from:  */}
            {/* https://drawkit.com/free-icons */}
            <FeatureBanner
              title="Explorer les cartes interactives"
              image="/static/icons/map.svg"
              imagePosition="left"
              links={[
                {
                  label: "Explorer les cartes",
                  href: "/carte/dimensions/lnob1",
                },
              ]}
            >
              Nos cartes interactives présentent les performances des
              départements du Bénin dans la réalisation du principe fondamental
              de l’Agenda 2030 de « ne laisser personne de côté ». Quatre
              dimensions mesurant les disparités sont considérées : les
              inégalités d’accès aux services publics, l’extrême pauvreté et la
              privation matérielle, les inégalités entre les sexes et les
              inégalités de revenu et de richesse. Visualisez la performance
              actuelle des départements sur ces dimensions.
            </FeatureBanner>
          </Fade>
        </Box>
        <Box marginY={8}>
          <Fade right>
            <FeatureBanner
              title="Analyser les profils du Bénin et de la CEDEAO"
              image="/static/icons/indicator.svg"
              imagePosition="right"
              links={[
                {
                  label: "Analyser les profils",
                  href: "https://regional-benin.sdgindex.org/profils",
                },
              ]}
            >
              Notre rapport comporte une page de profil dédiée au Bénin et à la
              CEDEAO, montrant les performances et les tendances par ODD et par
              indicateur. En cliquant sur un objectif ou un indicateur, vous
              pouvez consulter les métadonnées détaillées de l&apos;indicateur
              dans le panneau latéral.
            </FeatureBanner>
          </Fade>
        </Box>
        <Box marginY={8}>
          <Fade right>
            <FeatureBanner
              title="Télécharger le rapport et documents"
              image="/static/icons/download.svg"
              imagePosition="left"
              links={[
                {
                  label: "Télécharger le rapport (PDF)",
                  href: FRENCH_REPORT_DOWNLOAD_URL,
                  target: "_blank",
                  onClick: () => trackDownload(FRENCH_REPORT_DOWNLOAD_URL),
                },
                {
                  label: "Aller à la page des téléchargements",
                  href: "/telechargements",
                  variant: "outlined",
                },
              ]}
            >
              L&apos;ensemble du rapport, les ensembles de données et tout autre
              matériel supplémentaire sont disponibles gratuitement et peuvent
              être téléchargés sur notre site Web. Cela comprend notre rapport
              complet au format PDF, notre base de données Excel avec les
              scores, les évaluations, les tendances et les valeurs brutes,
              notre livre de codes, notre méthodologie, et bien plus encore.
            </FeatureBanner>
          </Fade>
        </Box>
      </Container>
    </Background>
  </AppLayout>
);

export default Index;
