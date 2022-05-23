export const timeAgo = (date) => {
  const importedDate = new Date(date).getTime();
  const currentDate = Date.now();
  const dateDifference = currentDate - importedDate;
  const timeAgo = Math.trunc(dateDifference / (24 * 60 * 60 * 1000));
  //   console.log(timeAgo);
  return timeAgo === 0
    ? "today"
    : timeAgo === 1
    ? "a day ago"
    : timeAgo + " days ago";
};
