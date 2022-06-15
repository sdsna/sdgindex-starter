export const getTooltipTextForScore = (country) => {
  const { score, scoreAsText } = country;

  if (score) return `Score: ${scoreAsText}`;

  return scoreAsText;
};
