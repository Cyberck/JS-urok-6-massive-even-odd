

const array = [1,2,3,4,5,6,7,8,9,10];
let answer = 0;

for(let i = 0; i < array.length; i++) {
	answer +=	array[i] % 2 == 1 ? 1 : 0;
}
console.log(answer);