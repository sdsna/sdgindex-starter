import {
  Box,
  Card,
  Container,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  DATABASE_SUBNATIONAL_DOWNLOAD_URL,
  DATABASE_REGIONAL_DOWNLOAD_URL,
  FRENCH_REPORT_DOWNLOAD_URL,
  ENGLISH_REPORT_DOWNLOAD_URL,
} from "root/config";
import HeaderLayout from "layouts/HeaderLayout";
import ResponsiveGridItem from "components/ResponsiveGridItem";
import DownloadResourceButton from "components/DownloadResourceButton";
import SdgBar from "components/SdgBar";
import { trackDownload } from "helpers/gtag";

const downloads = [
  {
    label: "Rapport sur le développement durable pour le Bénin",
    type: "PDF",
    image: "report-cover.png",
    url: FRENCH_REPORT_DOWNLOAD_URL,
  },
  {
    label: "Benin Sustainable Development Report (ENG)",
    type: "PDF",
    image: "report-cover.png",
    url: ENGLISH_REPORT_DOWNLOAD_URL,
  },
  {
    label: "Base de données (Infranationale)",
    type: "Excel",
    image: "database.png",
    url: DATABASE_SUBNATIONAL_DOWNLOAD_URL,
  },
  {
    label: "Base de données (Régionale)",
    type: "Excel",
    image: "database.png",
    url: DATABASE_REGIONAL_DOWNLOAD_URL,
  },
  {
    label: "Executive Summary (English)",
    type: "PDF",
    image: "exec-sum.webp",
    url: "https://s3.amazonaws.com/sustainabledevelopment.report/2023/executive-summary-benin-sdr.pdf",
  },
  {
    label: "Communiqué de presse",
    type: "Site Web",
    image: "press-release.png",
    url: "https://www.sdgindex.org/news/press-release-benin-sustainable-report-2023/",
  },
  {
    label: "Méthodologie",
    type: "PDF",
    image: "methodology-paper.png",
    url: "https://github.com/sdsna/2018GlobalIndex/raw/master/2018GlobalIndexMethodology.pdf",
  },
  {
    label: "Audit statistique du CCR",
    type: "PDF",
    image: "jrc-statistical-audit.png",
    url: "https://s3.amazonaws.com/sustainabledevelopment.report/2019/2019_JRC_Audit_SDG_Index.pdf",
  },
];

const globalIndices = [
  {
    label: "Sustainable Development Report 2023",
    type: "Rapport + Tableau de bord",
    image: "sdr.webp",
    url: "https://sdgindex.org/reports/sustainable-development-report-2023/",
  },
];

const regionalIndices = [
  {
    label: "Europe Sustainable Development Report 2022",
    type: "Rapport + Tableau de bord",
    image: "europe-sdr.png",
    url: "https://www.sdgindex.org/EU",
  },
  {
    label: "2022 Arab Region SDG Index and Dashboards Report",
    type: "Rapport",
    image: "arab-sdr.webp",
    url: "https://www.sdgindex.org/reports/arab-sdg-index-and-dashboard-report-2022/",
  },
  {
    label: "SDG Index 2021 for Latin America and the Caribbean",
    type: "Rapport (Espagnol)",
    image: "lac-sdr.png",
    url: "https://cods.uniandes.edu.co/wp-content/uploads/2022/08/I%CC%81ndice-ODS-2021-para-Ame%CC%81rica-Latina-y-el-Caribe.pdf",
  },
  {
    label: "2020 Africa SDG Index and Dashboards Report",
    type: "Rapport + Tableau de bord",
    image: "africa-sdr.png",
    url: "https://sdgindex.org/reports/2020-africa-sdg-index-and-dashboards-report/",
  },
];

const subnationalIndices = [
  {
    label: "Rapport sur le développement durable pour le Bénin",
    type: "Rapport + Tableau de bord",
    image: "report-cover.png",
    url: "https://sdgindex.org/reports/2023-07-13-benin-sustainable-development-report-2023",
  },
  {
    label: "United States Sustainable Development Report 2021",
    type: "Rapport + Tableau de bord",
    image: "us-states.webp",
    url: "https://www.sdgindex.org/reports/united-states-sustainable-development-report-2021/",
  },
  {
    label: "Paraguay Sustainable Development Report 2021",
    type: "Rapport + Tableau de bord",
    image: "paraguay-sdr-2021-cover.png",
    url: "https://www.sdgindex.org/reports/paraguay-sustainable-development-report-2021/",
  },
  {
    label: "Uruguay Sustainable Development Report 2021",
    type: "Rapport",
    image: "uruguay-sdr-2021-cover.png",
    url: "https://www.sdgindex.org/reports/uruguay-sustainable-development-report-2021/",
  },
  {
    label: "SDG Index on Racial Inequality in the US 2021",
    type: "Rapport + Tableau de bord",
    image: "us-states-lnob.png",
    url: "https://sdgindex.org/reports/in-the-red-the-us-failure-to-deliver-on-a-promise-of-racial-equality/",
  },
  {
    label: "Brazilian Cities SDG Index 2021",
    type: "Tableau de bord",
    image: "brazilian-cities.png",
    url: "https://sdgindex.org/reports/indice-de-desenvolvimento-sustentavel-das-cidades-brasil/",
  },
  {
    label: "Spanish Cities SDG Index 2020",
    type: "Rapport + Tableau de bord (Espagnol)",
    image: "spanish-cities.png",
    url: "https://sdgindex.org/reports/informe-los-ods-en-100-ciudades-espanolas/",
  },
  {
    label: "Municipal Atlas of the SDGs in Bolivia 2020",
    type: "Rapport + Tableau de bord",
    image: "bolivian-cities.png",
    url: "https://sdgindex.org/reports/municipal-atlas-of-the-sdgs-in-bolivia-2020/",
  },
  {
    label: "Italian Cities SDG Index",
    type: "Rapport (Italien)",
    image: "italian-cities.png",
    url: "https://www.feem.it/en/research/programs/firms-and-cities-towards-sustainability/ongoing-projects/the-italian-index-on-sdgs/",
  },
  {
    label: "2019 US Cities Sustainable Development Report",
    type: "Rapport",
    image: "us-cities.png",
    url: "https://sdgindex.org/reports/2019-us-cities-sustainable-development-report/",
  },
  {
    label: "SDG Index and Dashboards Report for European Cities",
    type: "Rapport + Tableau de bord",
    image: "eu-cities.png",
    url: "https://sdgindex.org/reports/sdg-index-and-dashboards-report-for-european-cities/",
  },
];

// We need to clear the grid because it uses a margin of -24px.
// In Chrome, the negative margin pulls up the bottom of the page and causes
// two scrollbars to be shown.
const GridClearer = styled("div")({
  paddingBottom: 1,
  display: "block",
});

const Downloads = () => (
  <HeaderLayout
    title="Téléchargements"
    subtitle="Télécharger le rapport sur le développement durable du Bénin et ses documents complémentaires"
    fullWidth
  >
    <Box
      marginBottom={7}
      bgcolor="#66badeff"
      display={{ xs: "none", md: "block" }}
    ></Box>
    <Container maxWidth="lg">
      <Box my={4}>
        <Grid container spacing={4}>
          {downloads.map(({ label, type, image, url }) => (
            <ResponsiveGridItem key={image} small={2} medium={3} large={4}>
              <DownloadResourceButton
                href={url}
                thumbnail={`/static/downloads/${image}`}
                height={160}
                label={label}
                type={type}
                onClick={() => trackDownload(url)}
              />
            </ResponsiveGridItem>
          ))}
        </Grid>
        <GridClearer id="downloads" />
      </Box>
      <Box marginY={8}>
        <Card>
          <SdgBar height={5} />
          <CardContent>
            <Box>
              <Typography variant="h2" gutterBottom>
                Notre travail : Suivre les progrès réalisés en matière
                d&apos;ODD
              </Typography>
              <Typography variant="body1">
                De bonnes données et des paramètres clairs sont essentiels pour
                que chaque pays puisse faire le point sur sa situation par
                rapport aux ODD, concevoir des voies pour atteindre les
                objectifs et suivre les progrès. Depuis 2016, le SDSN et
                Bertelsmann Stiftung publient chaque année l&apos;indice et les
                tableaux de bord mondiaux des ODD. La méthodologie a été
                examinée par des pairs (Schmidt-Traub et al., 2017) et a été
                auditée en 2019 par le Centre commun de recherche de la
                Commission européenne (Papadimitriou, Neves et Becker, 2019).
                Afin de fournir une meilleure analyse des contextes nationaux et
                régionaux, et d&apos;améliorer la pertinence des politiques, le
                SDSN, en collaboration avec de nombreux partenaires, a également
                développé des indices et des tableaux de bord régionaux et
                infranationaux sur les ODD.
              </Typography>
            </Box>
            <Box my={2}>
              <Typography variant="h3" gutterBottom>
                Indice mondial des ODD
              </Typography>
              <Grid container spacing={1}>
                {globalIndices.map(({ label, type, image, url }) => (
                  <ResponsiveGridItem key={url} small={2} medium={4} large={5}>
                    <DownloadResourceButton
                      href={url}
                      thumbnail={`/static/downloads/global/${image}`}
                      height={100}
                      label={label}
                      type={type}
                      onClick={() => trackDownload(url)}
                    />
                  </ResponsiveGridItem>
                ))}
              </Grid>
              <GridClearer />
            </Box>
            <Box my={2}>
              <Typography variant="h3" gutterBottom>
                Indices régionaux sur les ODD
              </Typography>
              <Grid container spacing={1}>
                {regionalIndices.map(({ label, type, image, url }) => (
                  <ResponsiveGridItem key={url} small={2} medium={4} large={5}>
                    <DownloadResourceButton
                      href={url}
                      thumbnail={`/static/downloads/regional/${image}`}
                      height={100}
                      label={label}
                      type={type}
                      onClick={() => trackDownload(url)}
                    />
                  </ResponsiveGridItem>
                ))}
              </Grid>
              <GridClearer />
            </Box>
            <Box my={2}>
              <Typography variant="h3" gutterBottom>
                Indices infranationaux sur les ODD
              </Typography>
              <Grid container spacing={1}>
                {subnationalIndices.map(({ label, type, image, url }) => (
                  <ResponsiveGridItem key={url} small={2} medium={4} large={5}>
                    <DownloadResourceButton
                      href={url}
                      thumbnail={`/static/downloads/subnational/${image}`}
                      height={100}
                      label={label}
                      type={type}
                      onClick={() => trackDownload(url)}
                    />
                  </ResponsiveGridItem>
                ))}
              </Grid>
              <GridClearer />
            </Box>
          </CardContent>
          <SdgBar height={5} />
        </Card>
      </Box>
    </Container>
  </HeaderLayout>
);

export default Downloads;
