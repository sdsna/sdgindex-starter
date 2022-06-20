import { forwardRef } from "react";

const ExternalLink = forwardRef((props, ref) => (
  <a target="_blank" rel="noopener noreferrer" ref={ref} {...props} />
));
ExternalLink.displayName = "ExternalLink";

export default ExternalLink;
