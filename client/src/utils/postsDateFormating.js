export default function postsDateFormat(timestamp) {
    const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
    const currentDate = new Date();
    const targetDate = new Date(timestamp);

    if (targetDate.getTime() > currentDate.getTime() + oneWeekInMillis) {
        return targetDate.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });
    }

    const targetTime = new Date(targetDate);
    const targetHour = targetTime.getHours();
    const targetMinute = targetTime.getMinutes();

    while (targetTime.getTime() > targetDate.getTime()) {
        targetTime.setDate(targetTime.getDate() - 7);
    }

    targetTime.setHours(targetHour, targetMinute, 0, 0);
    const dayOfMonth = targetTime.getDate();

    function getOrdinalSuffix(number) {
        const j = number % 10;
        const k = number % 100;

        if (j === 1 && k !== 11) {
            return 'st';
        }
        if (j === 2 && k !== 12) {
            return 'nd';
        }
        if (j === 3 && k !== 13) {
            return 'rd';
        }

        return 'th';
    }

    // Format the time manually to ensure two digits for the hour
    const formattedHour = targetTime.getHours().toString().padStart(2, '0');
    const formattedMinute = targetTime.getMinutes().toString().padStart(2, '0');

    const dateArray = [
        targetTime.toLocaleString('en-US', { month: 'long' }),
        ` ${dayOfMonth}${getOrdinalSuffix(dayOfMonth)}`,
        ` at ${formattedHour}:${formattedMinute}`,
    ];

    return dateArray;
}
