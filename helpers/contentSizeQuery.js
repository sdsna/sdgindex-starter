import { css } from "@emotion/react";

/*
 * Creates a media query and a container content query for the provided
 * breakpoint and the given CSS styles.
 *
 * Example:
 * const StyledComponent = styled(Component)(
 *  {
 *    color: "black",
 *  },
 *  ({ theme }) =>
 *    contentSizeQuery("medium-down", {
 *      padding: 30,
 *      background: theme.palette.secondary.main,
 *    })
 * );
 */
const contentSizeQuery = (size, styles) => {
  const cssStyles = css(styles);
  switch (size) {
    // the default styles
    // Note that each breakpoint can only show content up to a maximum size.
    // For example, on an MD-sized viewport (< 1280px), the user can only
    // see styles for #content.small and #content.medium.
    // The #content.large styles are only available for viewports >= 1280px.
    case "small":
      return (props) => css`
        ${props.theme.breakpoints.up("xs")} {
          #content &,
          #content.small & {
            ${cssStyles}
          }
        }
      `;
    case "medium":
      return (props) => css`
        ${props.theme.breakpoints.up("sm")} {
          #content &,
          #content.medium & {
            ${cssStyles}
          }
        }
      `;
    case "large":
      return (props) => css`
        ${props.theme.breakpoints.up("md")} {
          #content &,
          #content.large & {
            ${cssStyles}
          }
        }
      `;
    case "small-only":
      return (props) => css`
        ${props.theme.breakpoints.down("sm")} {
          #content & {
            ${cssStyles}
          }
        }
        #content.small & {
          ${cssStyles}
        }
      `;
    case "medium-down":
      return (props) => css`
        ${props.theme.breakpoints.down("md")} {
          #content & {
            ${cssStyles}
          }
        }
        #content.small &,
        #content.medium & {
          ${cssStyles}
        }
      `;
  }
};

export default contentSizeQuery;
