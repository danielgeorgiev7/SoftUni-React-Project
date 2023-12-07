const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '08298b375amsh62851719453f33bp15c4ddjsn140f0592a9b5',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
};
async function apiCall(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.response;
}

export async function getFixtures() {
    const dataNS = await apiCall('https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=541&status=NS');
    const dataTBD = await apiCall('https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=541&status=TBD')
    const final = [...Object.values(dataNS), ...Object.values(dataTBD)];
    return final.sort((a, b) => a.fixture.timestamp - b.fixture.timestamp);
}

export async function getPreviousFixtures() {
    const data = await apiCall('https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=541&status=FT');
    const final = [...Object.values(data)];
    return final.sort((a, b) => a.fixture.timestamp - b.fixture.timestamp);
}

export async function getFixtureInfo(id) {
    const data = await apiCall(`https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`);
    return data;
}

export async function getAllPlayers() {
    const data = await apiCall('https://api-football-v1.p.rapidapi.com/v3/players/squads?team=541');
    return data;
}

export async function getPlayer(id) {
    const data = await apiCall(`https://api-football-v1.p.rapidapi.com/v3/players?season=2023&id=${id}`);
    return data;
}

export async function getLaLiga() {
    const data = await apiCall('https://api-football-v1.p.rapidapi.com/v3/standings?league=140&season=2023');
    return data;

}

export async function getChampionsLeague() {
    const data = await apiCall('https://api-football-v1.p.rapidapi.com/v3/standings?league=2&season=2023');
    return data;

}