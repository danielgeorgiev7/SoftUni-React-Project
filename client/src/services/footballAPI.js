const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '08298b375amsh62851719453f33bp15c4ddjsn140f0592a9b5',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
};

export async function getFixtures() {
    const responseNS = await fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=541&status=NS', options);
    const dataNS = await responseNS.json();
    const responseTBD = await fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=541&status=TBD', options);
    const dataTBD = await responseTBD.json();
    const final = [...Object.values(dataNS.response), ...Object.values(dataTBD.response)];
    return final;
}

export async function getPreviousFixtures() {
    const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=541&status=FT', options);
    const data = await response.json();
    const final = [...Object.values(data.response)];
    return final;
}

export async function getFixtureInfo(id) {
    const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`, options);
    const data = await response.json();
    const final = data.response;
    return final;
}

export async function getAllPlayers() {
    const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/players/squads?team=541`, options);
    const data = await response.json();
    const final = (data.response);
    return final;
}

export async function getPlayer(id) {
    const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/players?season=2023&id=${id}`, options);
    const data = await response.json();
    const final = (data.response);
    return final;
}

export async function getLaLiga() {
    const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?league=140&season=2023`, options);
    const data = await response.json();
    const final = (data.response);
    return final;

}

export async function getChampionsLeague() {

}