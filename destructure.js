const person = {pName: 'Nayan', pPhone: 0017145, job: 'Engineer', salary: 50000, friend: ['Sajal', 'Rahman', 'Khayer', 'Anuz'], address: 'Dhaka'}

// const personName = person.pName;
// const personSalary = person.salary;

// console.log(personName);
// console.log(personSalary);
// console.log(person.pPhone);
// console.log(person.job);
const {pName, pPhone, job, salary} = person;
console.log(pName, job);
console.log(pPhone, salary);
console.log("=================================================")

const friends = ['Rahim', 'Karim', 'Akkas', 'Jabbar', 'Salman', 'Balman'];
const [firstFriend, secondFriend, thirdFriend, ...remainFried] = friends;
console.log(firstFriend,thirdFriend);
console.log("=================================================")

const complexObject = {studentName: "Nayan Malakar",
studentInfo:{
    address: 'Mohammadpur',
    phoneNumber: 789,
    fatherName: 'Nitai Chandra Malakar'
}
}

const {fatherName}= complexObject.studentInfo;
console.log("Complex Object element:", fatherName);

