const position = +process.argv[2];

const fibonacci = (n) => {
	if(n <= 1) return n;
	return fibonacci(n-1) + fibonacci(n-2);
};

try {
	console.log(fibonacci(position));
} catch {
	console.log("Value can't be found!");
}
