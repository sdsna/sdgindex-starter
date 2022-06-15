export const getTooltipTextForScore = (department) => {
  const { score, scoreAsText } = department;

  if (score) return `Score: ${scoreAsText}`;

  return scoreAsText;
};
