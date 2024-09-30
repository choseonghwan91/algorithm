// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let count = 0;
	for await (const line of rl) {
		if(count === 1) {
			console.log(solution(line));
			rl.close();	
		}
		count++;
	}
	
	process.exit();
})();

const solution = (input) => {
	const scores = input.split(" ")
	let first = [0];
	let second = [0];
	let third = [0];
	scores.forEach((score, index) => {
		const _score = +score
		if(_score > first[0]){
			third = second;
			second = first;
			first = [_score, index + 1];
		} else if (_score > second[0]){
			third = second;
			second = [_score, index + 1];
		} else if (_score > third[0]) {
			third = [_score, index + 1];
		}
	})
	return first[1] + " " + second[1] + " " + third[1]
}