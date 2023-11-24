export default function formatBirthday(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' }); // Set the locale to 'en-US'
    const year = date.getFullYear();

    const formattedDate = `${day} ${month}, ${year}`;
    return formattedDate;
}