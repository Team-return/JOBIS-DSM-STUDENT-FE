export const business_number_regex = (res: string) => {
  return res.replace(/^(\d{2})(\d{3})(\d{5})$/, "$1-$2-$3");
};

export const pon_number_regex = (number: string | null) => {
  if (!number) return null;

  if (number.length === 10)
    return number.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3");

  if (number.length === 11)
    return number.replace(/^(\d{3})(\d{4})(\d{4})$/, "$1-$2-$3");

  return number;
};

export const time_parsing = (time: string) => {
  return time.slice(0, 5);
};
