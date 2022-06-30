import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const reportTheme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.15rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.1rem",
    },
    body2: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: ".875rem",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          subtitle1: "p",
          subtitle2: "p",
          caption: "p",
          overline: "p",
        },
      },
    },
  },
});

const themeWithResponsiveFontSizes = responsiveFontSizes(reportTheme);

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={themeWithResponsiveFontSizes}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
