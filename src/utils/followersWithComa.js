export const followersWithComa = number => {
  return number.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
