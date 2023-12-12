const fs = require('fs');

function main() {
    const text = fs.readFileSync('./input.txt').toString('utf-8');
    let mapOfGameData = [];

    text.split('\n').forEach(txt => {
        let gameSplit = txt.split(':');
        let games = gameSplit[1].split('|');

        let finalVal = [];

        games.forEach(game => {
            finalVal.push(game.split(' ')
                                .filter(data => parseInt(data).toString() !== 'NaN')
                                .map(Number))
        });

        mapOfGameData.push(finalVal)
    });

    let resultCountArr = new Array(mapOfGameData.length).fill(1);

    mapOfGameData.forEach((game, i) => {
        let winningPoints = calculateMapping(game);
      
        for(let start = i+1; start < i+1+winningPoints; start++) {
            resultCountArr[start] += resultCountArr[i];
        }
    });

    console.log(resultCountArr.reduce((acc, count) => acc+count, 0));
}

function calculateMapping(games) {
    let winDic = {};
    let sameNumberInGames = 0;

    games[0].forEach(gameScore => winDic[gameScore] = true);

    games[1].forEach(gameScore => {
        if(winDic[gameScore]) {
            sameNumberInGames++;
        }
    });

    return sameNumberInGames;
}


main();