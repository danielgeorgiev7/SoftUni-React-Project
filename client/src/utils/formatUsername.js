export default function formatUsername(inputValue) {
    const allowedCharacters = /^[a-zA-Z0-9_.-]+$/;

    const filteredValue = inputValue.split('').filter(char => allowedCharacters.test(char)).join('');

    return filteredValue;
}