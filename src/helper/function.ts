export const getColorProcess = (value: number) => {
  if (value < 25) {
    return '#FF0000';
  } else if (value < 50) {
    return '#FFA500';
  } else if (value < 75) {
    return '#FFD700';
  } else if (value < 100) {
    return '#00FF00';
  } else if (value === 100) {
    return '#0000FF';
  }
  return '#FF0000';
};
