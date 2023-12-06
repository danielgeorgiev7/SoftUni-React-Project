export default function getJerseyColor(teamName) {
    const jerseyColors = {
        "AC Milan": "#cc1414",
        "Manchester United": "#cc1414",
        "Juventus": "#333333",
        "Athletic Club": "#cc1414",
        "Almeria": "#cc1414",
        "Celta Vigo": "#50acca",
        "Getafe": "#333333",
        "Real Sociedad": "#333333",
        "Atletico Madrid": "#cc1414",
        "Las Palmas": "#ffb732",
        "Girona": "#cc1414",
        "Osasuna": "#cc1414",
        "Sevilla": "#cc1414",
        "Barcelona": "#993299",
        "Rayo Vallecano": "#cc1414",
        "Valencia": "#cc1414",
        "Union Berlin": "#cc1414",
        "Napoli": "#50acca",
        "SC Braga": "#cc1414",
        "Cadiz": "#ffb732",
        "Granada": "#cc1414",
        "Real Betis": "#008000",
        "Villarreal": "#ffb732",
        "Alaves": "#333333",
        "Mallorca": "#cc1414"
    }
    return jerseyColors[teamName];
}