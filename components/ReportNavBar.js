import { Breadcrumbs, Link } from "@mui/material";

const ReportNavBar = () => (
  <Breadcrumbs separator="|">
    <Link underline="hover" color="inherit" href="/chapitres/executive-summary">
      Executive Summary (English)
    </Link>
    <Link underline="hover" color="inherit" href="/chapitres/executive-summary">
      Résumé Exécutif (Français)
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/chapitres/part-1-a-global-plan-to-finance-the-sdgs"
    >
      Part 1
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/chapitres/part-2-the-sdg-index-and-dashboards"
    >
      Part 2
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/chapitres/partie-3-atteindre-les-odd-au-benin-efforts-et-defis"
    >
      Part 3
    </Link>
  </Breadcrumbs>
);

export default ReportNavBar;
