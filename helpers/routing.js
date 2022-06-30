import { isGoal, isIndicator } from "@sdgindex/data/assessments";

export const chapterUrl = ({ slug }) => `/chapters/${slug}`;

export const mapUrl = () => "/map";

export const mapAssessmentUrl = ({ assessment }) => {
  let url = mapUrl();

  if (isGoal(assessment)) url += `/dimensions/${assessment.id}`;
  else if (isIndicator(assessment)) url += `/indicators/${assessment.slug}`;
  else throw "mapAssessmentUrl(): Assessment type not recognized";

  return url;
};
