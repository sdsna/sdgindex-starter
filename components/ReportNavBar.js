import { Breadcrumbs, Link } from "@mui/material";

const ReportNavBar = () => (
  <Breadcrumbs separator="|">
    <Link underline="hover" color="inherit" href="/chapters/executive-summary">
      Executive Summary
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/chapters/part-1-a-global-plan-to-finance-the-sdgs"
    >
      Part 1
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/chapters/part-2-the-sdg-index-and-dashboards"
    >
      Part 2
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/chapters/part-3-policy-efforts-and-commitments-for-the-sdgs"
    >
      Part 3
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/chapters/part-4-sdg-data-systems-and-statistics"
    >
      Part 4
    </Link>
  </Breadcrumbs>
);

export default ReportNavBar;
