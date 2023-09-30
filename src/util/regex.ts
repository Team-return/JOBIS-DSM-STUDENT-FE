export const business_number_regex = (res: string) => {
  return res.slice(0, 3) + "-" + res.slice(3, 5) + "-" + res.slice(5, 10);
};

export const pon_number_regex = (number: string | null) => {
  if (number) {
    if (number.length === 10)
      return number.replace(/^(\d{3})(\d{3})(\d{4})$/, $1 - $2 - $3);
    else if (number.length === 11)
      return (
        number.slice(0, 3) +
        "-" +
        number.slice(3, 7) +
        "-" +
        number.slice(7, 11)
      );
  }
  return null;
};
