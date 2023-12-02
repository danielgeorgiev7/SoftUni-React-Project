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

    return targetTime.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
}
