import {
  Box,
  Card,
  Container,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import { DATABASE_DOWNLOAD_URL } from "root/config";
import HeaderLayout from "layouts/HeaderLayout";
import ResponsiveGridItem from "components/ResponsiveGridItem";
import DownloadResourceButton from "components/DownloadResourceButton";
import SdgBar from "components/SdgBar";
import { trackDownload } from "helpers/gtag";

const downloads = [
  {
    label: "Benin Sustainable Development Report",
    type: "PDF",
    // image: "full-report.webp",
    url: "/TODO",
  },
  {
    label: "Database",
    type: "Excel",
    image: "database.png",
    url: "/TODO",
  },
  {
    label: "Supplementary Online Materials",
    type: "Excel",
    image: "supplementary-online-materials.png",
    url: "/TODO",
  },
  {
    label: "Press Release",
    type: "Website",
    image: "press-release.png",
    url: "https://www.sdgindex.org/news/press-release-sustainable-development-report-2022/",
  },
  {
    label: "Methodology",
    type: "PDF",
    image: "methodology-paper.png",
    url: "https://github.com/sdsna/2018GlobalIndex/raw/master/2018GlobalIndexMethodology.pdf",
  },
  {
    label: "JRC Statistical Audit",
    type: "PDF",
    image: "jrc-statistical-audit.png",
    url: "https://s3.amazonaws.com/sustainabledevelopment.report/2019/2019_JRC_Audit_SDG_Index.pdf",
  },
];

const globalIndices = [
  {
    label: "Sustainable Development Report 2022",
    type: "Report + Dashboard",
    image: "sdr.webp",
    url: "https://sdgindex.org/reports/sustainable-development-report-2022/",
  },
];

const regionalIndices = [
  {
    label: "2022 Arab Region SDG Index and Dashboards Report",
    type: "Report",
    image: "arab-sdr.webp",
    url: "https://www.sdgindex.org/reports/arab-sdg-index-and-dashboard-report-2022/",
  },
  {
    label: "Europe Sustainable Development Report 2021",
    type: "Report + Dashboard",
    image: "europe-sdr.webp",
    url: "https://www.sdgindex.org/EU",
  },
  {
    label: "2020 Africa SDG Index and Dashboards Report",
    type: "Report + Dashboard",
    image: "africa-sdr.png",
    url: "https://sdgindex.org/reports/2020-africa-sdg-index-and-dashboards-report/",
  },
  {
    label: "SDG Index 2019 for Latin America and the Caribbean",
    type: "Report (Spanish)",
    image: "lac-sdr.png",
    url: "https://sdgindex.org/reports/2019-sdg-index-for-latin-america-and-the-caribbean/",
  },
];

const subnationalIndices = [
  {
    label: "United States Sustainable Development Report 2021",
    type: "Report + Dashboard",
    image: "us-states.webp",
    url: "https://www.sdgindex.org/reports/united-states-sustainable-development-report-2021/",
  },
  {
    label: "Paraguay Sustainable Development Report 2021",
    type: "Report + Dashboard",
    image: "paraguay-sdr-2021-cover.png",
    url: "https://www.sdgindex.org/reports/paraguay-sustainable-development-report-2021/",
  },
  {
    label: "Uruguay Sustainable Development Report 2021",
    type: "Report",
    image: "uruguay-sdr-2021-cover.png",
    url: "https://www.sdgindex.org/reports/uruguay-sustainable-development-report-2021/",
  },
  {
    label: "SDG Index on Racial Inequality in the US 2021",
    type: "Report + Dashboard",
    image: "us-states-lnob.png",
    url: "https://sdgindex.org/reports/in-the-red-the-us-failure-to-deliver-on-a-promise-of-racial-equality/",
  },
  {
    label: "Brazilian Cities SDG Index 2021",
    type: "Dashboard",
    image: "brazilian-cities.png",
    url: "https://sdgindex.org/reports/indice-de-desenvolvimento-sustentavel-das-cidades-brasil/",
  },
  {
    label: "Spanish Cities SDG Index 2020",
    type: "Report + Dashboard (Spanish)",
    image: "spanish-cities.png",
    url: "https://sdgindex.org/reports/informe-los-ods-en-100-ciudades-espanolas/",
  },
  {
    label: "Municipal Atlas of the SDGs in Bolivia 2020",
    type: "Report + Dashboard",
    image: "bolivian-cities.png",
    url: "https://sdgindex.org/reports/municipal-atlas-of-the-sdgs-in-bolivia-2020/",
  },
  {
    label: "Italian Cities SDG Index",
    type: "Report (Italian)",
    image: "italian-cities.png",
    url: "https://www.feem.it/en/research/programs/firms-and-cities-towards-sustainability/ongoing-projects/the-italian-index-on-sdgs/",
  },
  {
    label: "2019 US Cities Sustainable Development Report",
    type: "Report",
    image: "us-cities.png",
    url: "https://sdgindex.org/reports/2019-us-cities-sustainable-development-report/",
  },
  {
    label: "SDG Index and Dashboards Report for European Cities",
    type: "Report + Dashboard",
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
    title="Downloads"
    subtitle="Download the Benin Sustainable Development Report and supplementary materials"
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
                Our Work: Tracking Progress on the SDGs
              </Typography>
              <Typography variant="body1">
                Good data and clear metrics are critical for each country to
                take stock of where it stands on the SDGs, devise pathways for
                achieving the goals, and track progress. Since 2016, the SDSN
                and Bertelsmann Stiftung have published the annual global SDG
                Index and Dashboards. The methodology has been peer-reviewed
                (Schmidt-Traub et al., 2017) and was audited in 2019 by the
                European Commission Joint Research Centre (Papadimitriou, Neves,
                and Becker, 2019). To provide a better analysis of country and
                regional contexts, and to improve policy relevance, the SDSN in
                collaboration with numerous partners has also developed regional
                and sub-national SDG indices and dashboards.
              </Typography>
            </Box>
            <Box my={2}>
              <Typography variant="h3" gutterBottom>
                Global SDG Index
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
                Regional SDG Indices
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
                Subnational SDG Indices
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
