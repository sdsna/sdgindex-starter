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
          slug="partie-1-lindice-de-developpement-durable-pour-le-benin"
          image="/static/chapters/figure-1-1.svg"
          title="Partie 1: L'indice de développement durable pour le Bénin"
        >
          The SDGs are not being achieved. Success is held back by severe
          financing constraints facing the developing countries: constraints
          that have been gravely aggravated by the COVID-19 pandemic and the war
          in Ukraine. The key to achieving the SDGs, besides preserving peace
          and lowering geopolitical tensions, is having a plan to finance them.
        </Chapter>
        <Chapter
          slug="partie-2-six-transformations-pour-hierarchiser-les-interventions"
          image="/static/chapters/figure-7.webp"
          title="Partie 2: « Six Transformations » pour hiérarchiser les interventions"
        >
          Les 17 ODD et leurs 169 cibles d&eacute;crivent les objectifs &agrave;
          atteindre en 2030. En revanche, ils ne pr&eacute;cisent pas comment
          les Gouvernements pourraient s&rsquo;organiser pour les atteindre.
          S&rsquo;inspirant des travaux de Sachs et al. (2019), ce rapport
          propose &laquo;&nbsp;Six Transformations&nbsp;&raquo;, afin
          d&rsquo;aider &agrave; d&eacute;finir une strat&eacute;gie
          op&eacute;rationnelle pour les ODD au B&eacute;nin.
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
      </Grid>
    </Box>
  </HeaderLayout>
);

export default Chapters;
