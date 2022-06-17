import { forwardRef } from "react";
import Link from "next/link";

// Fixes composition error for wrapping MUI Tabs in NextJS Links
// https://material-ui.com/guides/composition/#caveat-with-refs
const TabWithLink = forwardRef(({ href, ...otherProps }, ref) => (
  <Link href={href}>
    <a {...otherProps} ref={ref} />
  </Link>
));

TabWithLink.displayName = "TabWithLink";

export default TabWithLink;
