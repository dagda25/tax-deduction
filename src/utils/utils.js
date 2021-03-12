export const getEnding = (number) => {
  switch (number % 10) {
    case 1:
      return `ь`;
    case 2:
      return `я`;
    case 3:
      return `я`;
    case 4:
      return `я`;
    default:
      return `ей`;
  }
};

export const getYear = (number) => {
  switch (number) {
    case 1:
      return `в 1-ый`;
    case 2:
      return `во 2-ой`;
    case 3:
      return `в 3-ий`;
    case 4:
      return `в 4-ый`;
    case 5:
      return `в 5-ый`;
    case 6:
      return `в 6-ой`;
    case 7:
      return `в 7-ой`;
    case 8:
      return `в 8-ой`;
    default:
      return `в ${number}-й`;
  }
};
