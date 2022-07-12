// The page title
export const TITLE = "Benin Sustainable Development Report";

// A short title for the data visualization, used in drawers.
// For example: SDR 2021, ESDR 2020, ...
export const SHORT_TITLE = "Benin 2022";

// The maximum rank on the SDG Index, spillover index, etc...
// Example: 50, 165, ...
export const MAX_RANK = null;

// The URL of the full report (PDF)
// The report should be hosted on AWS. Directly downloading it from Netlify will
// consume too much bandwidth.
export const REPORT_DOWNLOAD_URL =
  "https://s3.amazonaws.com/sustainabledevelopment.report/2022/2022-benin-sustainable-development-report.pdf";

// The URL of the database (Excel)
// Example: /static/downloads/files/SDR2021-database.xlsx
export const DATABASE_SUBNATIONAL_DOWNLOAD_URL =
  "/static/downloads/files/Database-Benin-Infranationale-2022.xlsx";
export const DATABASE_REGIONAL_DOWNLOAD_URL =
  "/static/downloads/files/Database-Benin-Regional-2022.xlsx";

// The URL of the deployed page (used in meta tags for SMO)
// Example: https://www.domain.com/
export const URL = "https://benin.sdgindex.org/";

// The description shown in Google Search results and on social media networks
// Should be max ~150 characters.
export const META_DESCRIPTION =
  "The Benin Sustainable Development Report tracks Benin’s progress on the 17 SDGs in light of the country’s first issue of the SDG Eurobond in July 2021";

// The preview image shown in social networks and when sharing on messengers,
// like WhatsApp and others
// The URL should be absolute, e.g.: https//www.domain.com/static/preview.jpg
// Recommended size: 1200 x 627
export const META_IMAGE = "https://benin.sdgindex.org/static/meta-image.png";

// The Google Analytics tracking ID
export const GA_TRACKING_ID = "UA-152859841-3";
