import { Breadcrumbs, Link } from "@mui/material";

const ReportNavBar = () => (
  <Breadcrumbs separator="|">
    <Link underline="hover" color="inherit" href="/chapitres/executive-summary">
      Executive Summary (English)
    </Link>
    <Link underline="hover" color="inherit" href="/chapitres/resume-executif">
      Résumé Exécutif (Français)
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/chapitres/partie-1-lindice-de-developpement-durable-pour-le-benin"
    >
      Partie 1
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/chapitres/partie-2-six-transformations-pour-hierarchiser-les-interventions"
    >
      Partie 2
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/chapitres/partie-3-atteindre-les-odd-au-benin-efforts-et-defis"
    >
      Partie 3
    </Link>
  </Breadcrumbs>
);

export default ReportNavBar;
