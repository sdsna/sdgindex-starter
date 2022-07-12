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
          image="/static/chapters/figure-1.webp"
          title="Partie 1: L'indice de développement durable pour le Bénin"
        >
          L&rsquo;indice et les tableaux de bord s&rsquo;appuient sur un
          ensemble d&rsquo;indicateurs internationaux pour lesquels des
          donn&eacute;es sont disponibles pour le B&eacute;nin, et les autres
          pays de la CEDEAO. Le B&eacute;nin est compar&eacute; &agrave; ses
          voisins afin de contextualiser ses performances et tendances pour la
          r&eacute;alisation des ODD.
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
          slug="partie-3-atteindre-les-odd-au-benin-efforts-et-defis"
          image="/static/chapters/figure-3-4.webp"
          title="Partie 3: Atteindre les ODD au Bénin : efforts et défis"
        >
          Des objectifs, strat&eacute;gies et plans nationaux ambitieux et
          solides sont essentiels pour transformer les ODD en un programme
          d&rsquo;action. Chaque ann&eacute;e depuis 2018, SDSN mobilise son
          r&eacute;seau mondial d&rsquo;experts pour analyser les efforts des
          gouvernements pour atteindre les ODD.
        </Chapter>
      </Grid>
    </Box>
  </HeaderLayout>
);

export default Chapters;
