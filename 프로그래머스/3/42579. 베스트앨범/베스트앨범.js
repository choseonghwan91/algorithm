function solution(genres, plays) {
    const answer = [];
    
    // 장르별로 총 재생횟수와 상위권 2곡의 재생횟수, 고유번호를 가지고 있는 데이터를 만든다.
    const hash = new Map();
    for(let i = genres.length - 1; i >= 0; i--){
        const currGenreValue = hash.get(genres[i]) || { totalPlays: 0, firstSong: { play:0, num:0 }, secondSong: { play:0, num:0 } };
        const totalPlays = currGenreValue.totalPlays += plays[i];
        let firstSong = currGenreValue.firstSong;
        let secondSong = currGenreValue.secondSong;
        
        if(plays[i] >= currGenreValue.firstSong.play) {
            secondSong = currGenreValue.firstSong;
            firstSong = { play: plays[i], num: i };
        } else if (plays[i] >= currGenreValue.secondSong.play) {
            secondSong = { play: plays[i], num: i };
        }
        
        hash.set(genres[i], { totalPlays, firstSong, secondSong })
    }
    
    // 만든 데이터를 배열로 변환한다
    const array = [];
    hash.forEach((value) => array.push(value));
    
    // 재생횟수 순으로 정렬한다.
    array.sort((a,b) => b.totalPlays - a.totalPlays);
    
    // 정렬한 데이터를 순회하면서 리턴할 데이터를 만들어 준다.
    array.forEach((data) => {
        if(data.firstSong.play) answer.push(data.firstSong.num);
        if(data.secondSong.play) answer.push(data.secondSong.num);
    })
    
    return answer;
}