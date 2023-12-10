const fs = require('fs');

function main() {
    const text = fs.readFileSync('./input.txt').toString('utf-8');
    const mapOfGameData = {};

    text.split('\n').forEach(txt => {
        let gameSplit = txt.split(':');
        let games = gameSplit[1].split('|');

        mapOfGameData[gameSplit[0]] = {};

        games.forEach((game, index) => {
            mapOfGameData[gameSplit[0]][index] = game.split(' ').filter(data => parseInt(data).toString() !== 'NaN').map(Number);
        })
    });

    let totalPoint = 0;

    for(let gameKey in mapOfGameData) {
        let games = mapOfGameData[gameKey];

        totalPoint += calculatePoints(games);
    }

    console.log(totalPoint)
}

function calculatePoints(games) {
    let game1 = {};
    let sameNumberInGames = 0;

    games[0].forEach(gameScore => game1[gameScore] = true);

    games[1].forEach(gameScore => {
        if(game1[gameScore]) {
            sameNumberInGames++;
        }
    });

    return sameNumberInGames > 0 ? Math.pow(2, sameNumberInGames - 1) : 0;
}

main();