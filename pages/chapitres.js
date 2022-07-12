import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Download } from "mdi-material-ui";
import { REPORT_DOWNLOAD_URL } from "root/config";
import HeaderLayout from "layouts/HeaderLayout";
import ResponsiveGridItem from "components/ResponsiveGridItem";
import Emphasis from "components/Emphasis";
import ExternalLink from "components/ExternalLink";
import { chapterUrl } from "helpers/routing";
import { trackDownload } from "helpers/gtag";

const Chapter = ({ slug, title, image, children }) => (
  <ResponsiveGridItem small={1} medium={2} large={2}>
    <Card style={{ height: "100%" }}>
      <Link href={chapterUrl({ slug })} passHref>
        <CardActionArea style={{ height: "100%" }}>
          <CardMedia image={image} style={{ height: 240 }} />
          <CardContent>
            <Typography gutterBottom variant="body1">
              <Emphasis>{title}</Emphasis>
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary">
              {children}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  </ResponsiveGridItem>
);

const Chapters = () => (
  <HeaderLayout
    title="Lire le rapport"
    subtitle="Chapitres du Rapport sur le développement durable pour le Bénin 2022"
  >
    <Box my={2} display="flex" flexDirection="row-reverse">
      <Button
        href={REPORT_DOWNLOAD_URL}
        component={ExternalLink}
        variant="outlined"
        startIcon={<Download />}
        onClick={() => trackDownload(REPORT_DOWNLOAD_URL)}
      >
        Télécharger le rapport
      </Button>
    </Box>
    <Box marginTop={2} marginBottom={4}>
      <Grid container spacing={2}>
        <Chapter
          slug="executive-summary"
          image="/static/chapters/SDG.webp"
          title="Executive Summary (English)"
        >
          At the halfway point, and aware of the remaining challenges to achieve
          the Sustainable Development Goals (SDGs), the Government of Benin
          asked the UN Sustainable Development Solutions Network (SDSN) to
          support it in the monitoring and evaluation of the 2030 Agenda.
        </Chapter>
        <Chapter
          slug="resume-executif"
          image="/static/chapters/ODD.webp"
          title="Résumé exécutif (Français)"
        >
          A mi-chemin et conscient des d&eacute;fis &agrave; relever pour la
          r&eacute;alisation des Objectifs de D&eacute;veloppement durable
          (ODD), le Gouvernement du B&eacute;nin a sollicit&eacute; le
          R&eacute;seau de solutions pour le d&eacute;veloppement durable des
          Nations Unies (SDSN) afin de l&rsquo;accompagner dans le suivi et
          l&rsquo;&eacute;valuation pour la mise en œuvre de l&rsquo;Agenda
          2030.
        </Chapter>
        <Chapter
          slug="part-1-a-global-plan-to-finance-the-sdgs"
          image="/static/chapters/figure-1-1.svg"
          title="Part 1: A Global Plan to Finance the Sustainable Development Goals"
        >
          The SDGs are not being achieved. Success is held back by severe
          financing constraints facing the developing countries: constraints
          that have been gravely aggravated by the COVID-19 pandemic and the war
          in Ukraine. The key to achieving the SDGs, besides preserving peace
          and lowering geopolitical tensions, is having a plan to finance them.
        </Chapter>
        <Chapter
          slug="part-2-the-sdg-index-and-dashboards"
          image="/static/chapters/figure-2-8.webp"
          title="Part 2: The SDG Index and Dashboards"
        >
          In 2015, for the first time in history, all UN Member States agreed on
          a common set of goals for sustainable development. Multiple health and
          security crises, amplified by the climate and biodiversity crises, are
          now, however, putting the sustainable development agenda at risk. As
          the SDG Index highlights, since 2019 these crises have halted progress
          on sustainable development worldwide.
        </Chapter>
        <Chapter
          slug="part-3-policy-efforts-and-commitments-for-the-sdgs"
          image="/static/chapters/figure-3-4.webp"
          title="Part 3: Policy Efforts and Commitments for the SDGs"
        >
          Ambitious and sound national targets, strategies, and plans are
          crucial to turning the SDGs into an action agenda. At mid-point on the
          way to 2030, policy efforts and commitments supporting the SDGs vary
          significantly across countries, including among G20 countries. This
          year&apos;s edition presents pilot scores of Governments&apos;
          Commitment and Efforts for the SDGs for more than 60 countries.
        </Chapter>
        <Chapter
          slug="part-4-sdg-data-systems-and-statistics"
          image="/static/chapters/figure-4-1.svg"
          title="Part 4: SDG Data Systems and Statistics"
        >
          The COVID-19 pandemic has prompted a massive shift in the demand for
          data, especially for timelier and higher-quality data. Governments
          have needed more rapid, geolocated, and granular data and have had to
          find new ways to satisfy user demands with reduced budgets and staff
          resources, while also balancing data timeliness, precision, and
          quality needs.
        </Chapter>
      </Grid>
    </Box>
  </HeaderLayout>
);

export default Chapters;
