function solution(names, yearning, photos) {
    const score = {};
    names.forEach((name, i) => {
        score[name] = yearning[i];
    })
    return photos.map((photo) => 
        photo.reduce((totalScore, name) => totalScore + (score[name] ?? 0), 0));
}