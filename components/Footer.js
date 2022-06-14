import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Linkedin, Facebook, Twitter, EmailNewsletter } from "mdi-material-ui";
import { REPORT_DOWNLOAD_URL } from "root/config";
import contentSizeQuery from "helpers/contentSizeQuery";
import { trackDownload } from "helpers/gtag";

const FooterTypography = (props) => (
  <Typography color="#fff" variant="body2" {...props} />
);

const ResponsiveGridItem = styled(Grid)(
  (props) => ({
    flexBasis: `${props.styled.width * 100}%`,
    maxWidth: `${props.styled.width * 100}%`,
  }),
  contentSizeQuery("medium-down", {
    maxWidth: "100%",
    flexBasis: "100%",
    textAlign: "center",
    [":not(:first-of-type)"]: {
      marginTop: 16,
    },
  })
);
ResponsiveGridItem.defaultProps = { item: true };

const Logo = styled("img")({ height: 80 });

const BoxWithShadow = styled(Box)({
  boxShadow: `0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
});

const Footer = () => (
  <BoxWithShadow paddingY={4} position="relative" bgcolor="#0073b0ff">
    <Container maxWidth="lg">
      <Grid container>
        <ResponsiveGridItem styled={{ width: 1 / 3 }}>
          <Logo
            alt="Logo"
            src="/static/logo.svg"
            style={{ height: 80, marginBottom: 10 }}
          />
          <Typography variant="h6" color="white" gutterBottom>
            Check us out on social media!
          </Typography>
          <Link href="https://www.linkedin.com/company/unsdsn/" target="_blank">
            <Linkedin style={{ fontSize: "30px", color: "white" }} />
          </Link>
          <Link href="https://www.facebook.com/UNSDSN" target="_blank">
            <Facebook style={{ fontSize: "30px", color: "white" }} />
          </Link>
          <Link href="https://twitter.com/UNSDSN" target="_blank">
            <Twitter style={{ fontSize: "30px", color: "white" }} />
          </Link>
          <Link
            href="https://us8.list-manage.com/subscribe?u=a04105bfca6c4cb8c24ff8680&id=2302100059"
            target="_blank"
          >
            <EmailNewsletter style={{ fontSize: "30px", color: "white" }} />
          </Link>
        </ResponsiveGridItem>
        <ResponsiveGridItem styled={{ width: 2 / 3 }}>
          <FooterTypography gutterBottom>
            The Sustainable Development Report (formerly the SDG Index &
            Dashboards) is a global assessment of countries&apos; progress
            towards achieving the Sustainable Development Goals. It is a
            complement to the official SDG indicators and the voluntary national
            reviews.
          </FooterTypography>
          <FooterTypography gutterBottom>
            All data presented on this website are based on the publication{" "}
            <Link
              color="inherit"
              href={REPORT_DOWNLOAD_URL}
              target="_blank"
              onClick={() => trackDownload(REPORT_DOWNLOAD_URL)}
            >
              Sachs et al. (2022): From Crisis to Sustainable Development: the
              SDGs as Roadmap to 2030 and Beyond. Sustainable Development Report
              2022. Cambridge: Cambridge University Press.
            </Link>
          </FooterTypography>
          <FooterTypography gutterBottom>
            Feedback? Questions? Contact us at{" "}
            <Link
              color="inherit"
              href="mailto:info@sdgindex.org"
              target="_blank"
            >
              info@sdgindex.org
            </Link>
          </FooterTypography>
        </ResponsiveGridItem>
      </Grid>
    </Container>
  </BoxWithShadow>
);

export default Footer;
