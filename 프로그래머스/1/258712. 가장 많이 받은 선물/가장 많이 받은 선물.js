function solution(friends, gifts) {
    const reciveList = friends.map(()=> 0);
    const score = getScore(friends, gifts);
    const graph = Array.from({length: friends.length}, () => Array.from({length: friends.length}, () => 0));
    const friendsIndexList = getFriendsIndexList(friends);
    
    gifts.forEach((gift) => {
        const [giver, reciver] = gift.split(" ");
        graph[friendsIndexList[giver]][friendsIndexList[reciver]]++;
    })
    
    for(let i = 0; i < friends.length; i++){
        for(let j = i; j < friends.length; j++) {
            if(i === j) continue;
            if(graph[i][j] > graph[j][i]) reciveList[i]++;
            if(graph[i][j] < graph[j][i]) reciveList[j]++;
            if(graph[i][j] === graph[j][i]) {
                if(score[friends[i]] > score[friends[j]]) reciveList[i]++;
                if(score[friends[i]] < score[friends[j]]) reciveList[j]++;
            }
        }
    }
    
    return Math.max(...reciveList)
}

const getFriendsIndexList = (friends) => {
    const _friends = {};
    friends.forEach((friend, i) => {
        _friends[friend] = i;
    })
    return _friends;
}

const getScore = (friends, gifts) => {
    const _friends = {};
    friends.forEach((friend) => {
        _friends[friend] = 0;
    })
    
    gifts.forEach((gift) => {
        const [giver, reciver] = gift.split(" ");
        _friends[giver]++;
        _friends[reciver]--;
    })
    
    return _friends;
}