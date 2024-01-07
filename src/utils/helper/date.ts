export const formatDate = (inputDate: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const formattedDate = new Date(inputDate).toLocaleDateString(
    'en-US',
    options,
  );
  return formattedDate;
};
