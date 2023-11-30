export function formatDate(inputString) {
  const dateObject = new Date(inputString);

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const outputString = formatter.format(dateObject);

  return outputString;
}
export function checkSameMonth(compareDate) {
  var currentDate = new Date();
  var compareDateTime = new Date(compareDate);

  return (
    currentDate.getFullYear() === compareDateTime.getFullYear() &&
    currentDate.getMonth() === compareDateTime.getMonth()
  );
}
