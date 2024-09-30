const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line);
	if (input.length === line[0]+1) {
		rl.close();
	}
});

rl.on('close', () => {
	let sum = 0;
	for (let i = 1; i < input.length; i++) {
		let cal = input[i].split(" ");
		let operator = cal[1]
		
		switch (operator) {
			case '+':
				sum += Number(cal[0]) + Number(cal[2]);
				break;
				
			case '-':
				sum += Number(cal[0]) - Number(cal[2]);
				break;
				
			case '*':
				sum += Number(cal[0]) * Number(cal[2]);
				break;
				
			case '/':
				sum += Math.floor(Number(cal[0]) / Number(cal[2]));
				break;
		}
	}
	console.log(sum)
})