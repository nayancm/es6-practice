function add(num1, num2){
    if (num2 == undefined) {
        num2 = 0;
    }
    return num1 + num2;
}
let total = add(15);
console.log("First Result:", total);



function add2(number1, number2 = 25){ // in number2 variable assigned default value 15 
    //number2 = number2 || 15;
    return number1 + number2;
}
console.log("Result: ", add2(5,7));
console.log("Result2: ", add2(5));


 