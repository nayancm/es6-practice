class Parent{
    constructor(){
        this.fatherName = "Nitai Chandra Malakar.";
    }
}

class Child extends Parent{
    constructor(chName, chAge){
        super();
        this.childName = chName;
        this.childAge = chAge;
        this.childCountry = "Bangladesh.";
    }

    getNameAndCountry(){
        return this.childName + " " + this.childCountry
    }
}

const baby1 = new Child("Nayan Chandra Malakar.", 25);
const baby2 = new Child("Gopal Chandra Malakar.", 22);

console.log(baby1);
console.log(baby2);

console.log(baby1.getNameAndCountry());
console.log(baby2.getNameAndCountry());

