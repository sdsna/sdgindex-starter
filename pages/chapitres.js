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
import { FRENCH_REPORT_DOWNLOAD_URL } from "root/config";
import HeaderLayout from "layouts/HeaderLayout";
import ResponsiveGridItem from "components/ResponsiveGridItem";
import Emphasis from "components/Emphasis";
import ExternalLink from "components/ExternalLink";
import { chapterUrl } from "helpers/routing";
import { trackDownload } from "helpers/gtag";

const Chapter = ({ slug, title, image, children }) => (
  <ResponsiveGridItem small={1} medium={2} large={2}>
    <Card style={{ height: "100%" }}>
      <Link href={chapterUrl({ slug })} legacyBehavior passHref>
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
    subtitle="Chapitres du Rapport sur le développement durable pour le Bénin 2023"
  >
    <Box my={2} display="flex" flexDirection="row-reverse">
      <Button
        href={FRENCH_REPORT_DOWNLOAD_URL}
        component={ExternalLink}
        variant="outlined"
        startIcon={<Download />}
        onClick={() => trackDownload(FRENCH_REPORT_DOWNLOAD_URL)}
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
      </Grid>
    </Box>
  </HeaderLayout>
);

export default Chapters;
