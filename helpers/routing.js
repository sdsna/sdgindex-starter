import { isLnobDimension, isIndicator } from "@sdgindex/data/assessments";

export const chapterUrl = ({ slug }) => `/chapitres/${slug}`;

export const mapUrl = () => "/carte";

export const mapAssessmentUrl = ({ assessment }) => {
  let url = mapUrl();

  if (isLnobDimension(assessment))
    url += `/dimensions/${assessment.id.toLowerCase()}`;
  else if (isIndicator(assessment)) url += `/indicateurs/${assessment.slug}`;
  else throw "mapAssessmentUrl(): Assessment type not recognized";

  return url;
};
