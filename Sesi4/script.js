// Array Methods
// Map, filter, reduce,find

const tasks = [
  {
    id: 1,
    title: "Learn Javascript",
    completed: false,
  },
  {
    id: 2,
    title: "Do homework",
    completed: true,
  },
  {
    id: 3,
    title: "Eat sushi",
    completed: false,
  },
];
// Iterasi pertama
// count = 0, task = false
// Iterasi kedua
// count = 0, task = true
// +1
// count = 1 task = false
// Iterasi ketiga
// count =1

// const completedCount = tasks.reduce((count, task)=> (task.completed ? count + 1 : count), 0);
// console.log(completedCount);

// Destructuing array = []
// Destructuring object = {}

// const upperCaseTitle = tasks.map(task=>({...task, title: task.title.toUpperCase()}));
// console.log('Uppercase title: ', upperCaseTitle);

// const arrOfNumber = [1, 2, 3];
// const newArr = arrOfNumber.map((num)=> num*2);
// const newArrForEach = [];
// arrOfNumber.forEach((num)=>{
//     num *=2;
//     newArrForEach.push(num);
// }
// )
// console.log(newArr);
// console.log(newArrForEach);

// const incompleteTask = tasks.filter(task=> !task.completed);
// console.log('Incomplete task(s): ', incompleteTask);

// const evenNumberFilter = arrOfNumber.map((num)=> {
//     if(num %2 ===0){
//         return num;
//     }
// })

// const evenNumberMap = arrOfNumber.filter((num) => {
//   return num % 2 === 0 ? num : undefined;
// });

// map = [] All array
// filter = [] All satisfied

// const totalNumber = arrOfNumber.reduce((acc, cur) => acc + cur,100);

// console.log(totalNumber);

// console.log(evenNumberMap);

// const homeworkTask = tasks.find((task)=>task.id === 1);
// console.log(homeworkTask)

// Spread
// let arr1 = [1,2,3];
// const arr2 = [4,5,6];
// let arr3 = [...arr1];
// arr3.push(5)
// console.log(arr3)
// console.log(arr1)
// let combinedArr = [...arr1, ...arr2];
// console.log(combinedArr)

// Rest
// function multiply(factor, ...numbers){
//     return numbers.map(num=> num * factor);
// }
// console.log(multiply(2, 1,2,3,4,5,6,7,8,9,10));

// Destructuring & Optional Chaining

const number = [1, 5, 6];
const [, , x3] = number;

// console.log(x1)
// console.log(x2)
console.log(x3);

const { title, ...details } = tasks;
// console.log(id);
// console.log(title);
console.log(details);

const user = { userName: "Udin", greet: () => "Hello" };
console.log(user.age);
console.log(user.userName);
console.log(user.greet());
console.log(user.farewell?.());
