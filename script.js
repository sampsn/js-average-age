const superHeroes = {
	Tony: 42,
	Peter: 18,
	Steve: 104,
	Bruce: 38,
	Thor: 1055,
};
const averageAge = (obj) => {
	let total = 0;
	let counter = 0;
	for (let i in obj) {
		total += obj[i];
		counter += 1;
	}
	let averageAge = total / counter;

	return averageAge;
};

const result = document.getElementById("result");

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
	result.textContent = averageAge(superHeroes);
});
