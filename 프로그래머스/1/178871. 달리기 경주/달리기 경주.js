function solution(players, callings) {
    const playerOfScore = {};
    const scoreOfPlayer = {};
    players.forEach((player, i) => {
        playerOfScore[player] = i + 1;
        scoreOfPlayer[i+1] = player;
    })
    
    callings.forEach((call) => {
        const currScore = playerOfScore[call];
        const nextPlayer = scoreOfPlayer[currScore - 1]
        playerOfScore[call] = currScore - 1;
        playerOfScore[nextPlayer] = currScore;
        scoreOfPlayer[currScore - 1] = call;
        scoreOfPlayer[currScore] = nextPlayer;
    })
    
    return players.map((_,i) => scoreOfPlayer[i+1]);
}

