import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#1a305b",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
    },
    typography: {
      h1: {
        fontSize: "3.7rem",
        fontWeight: 500,
      },
      h2: {
        fontSize: "1.9rem",
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
        lineHeight: 1.25,
      },
      subtitle1: {
        fontSize: "1.25rem",
        fontWeight: 300,
        lineHeight: 1.33,
      },
      subtitle2: {
        fontSize: "1rem",
      },
      caption: {
        fontSize: ".7rem",
        letterSpacing: 0,
        lineHeight: 1.2,
      },
      overline: {
        fontSize: ".7rem",
        letterSpacing: 0,
        textTransform: "uppercase",
        lineHeight: 1,
        marginBottom: 8,
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
    MuiTableCell: {
      styleOverrides: {
        body: {
          fontSize: "1rem",
        },
        head: {
          fontSize: "1.1rem",
        },
      },
    },
  })
);

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
