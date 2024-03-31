import shuffle from "./shuffle";

function getRandomOne(array: any[]) {
	return shuffle(array)[0];
}

export default getRandomOne;
