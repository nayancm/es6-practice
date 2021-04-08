const ages1 = [1, 2, 3, 4];
const ages2 = [5, 6, 7, 8];
const ages3 = [9, 10, 11, 12];

const allAges1 = ages1.concat(ages2).concat(100).concat(ages3);
console.log(allAges1);

const maximumValue = Math.max(...ages3);
console.log(maximumValue);

console.log(...ages3)

const allAges2 = [...ages1, ...ages2, 500, ...ages3]
console.log(allAges2);




