function doubleIt(num){
    return num*2;
}

console.log(doubleIt(5));
//======================================
const test = function doubleIt2(number){
    return number * 2;
}
const result = test(20);
console.log("Result:",result);
console.log(test(10));
//========================================

const myFun = (numb) => numb *2;
console.log(myFun(50));

const myFun2 = (number1, number2) => number1 + number2;
console.log(myFun2(50,70));

const noParameter = () => 500;
console.log(noParameter());

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const multi = sum * diff;
    return multi;
}

console.log("Multi statement function result:", doMath(7, 5));
