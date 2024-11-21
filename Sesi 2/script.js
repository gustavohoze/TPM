// Variables
// let, const, var

// const itu tidak bisa diubah
const pi = 3.14;


// Block scope - Non Block Scope
// let radius = 10;
// var radius2;

// for(let i=0;i<5;i++){
//     let j = i;
// }
// for(let i=0;i<5;i++){
//     var k = i;
// }
// console.log(j);
// console.log(k);

// Data Types
// integer, double, float -> number
// string -> string
// boolean -> boolean

// let flag = true;

// console.log(typeof(flag));

// Array, Object, Array of Object

// let arrOfNumber = [10, 9 , 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(arrOfNumber[1]);

// let student = {
//     name : "Susi",
//     age : 17,
//     major : "Computer Science"
// };

// console.log(student.name);
// console.log("Nama murid: " + student.name + ", Umur murid: " + student.age + ", Jurusan murid: " + student.major);
// console.log();
// console.log();
// console.log(`Nama murid: ${student.name}, Umur murid: ${student.age}`);

// var arrOfStudent = [
//     {
//         name : "Calvin",
//         age : 17,
//         major : "Computer Science"
//     }, 
//     {
//         name : "Jazzlyn",
//         age : 20,
//         major : "Information System"
//     }, 
//     {
//         name : "Jeniffer",
//         age : 50,
//         major : "Cyber Security"
//     }
// ];

// console.log(arrOfStudent[1].name);

// Arithmetic, Assignment, Comparator

// +, -, /, *, %, **
// Penjumlahan
// let sum = 4 + 5;
// console.log(sum);
// Pengurangan
// let sub = 5- 4;
// console.log(sub);
// Pembagian
// let div = 10 / 5;
// console.log(div / 2);
// Perkalian
// let mul = 4*4;
// console.log(mul);
// Modulo
// let mod = 10%3;
// console.log(mod);
// Pangkat
// let square = 5**2;
// console.log(square);
// Akar
// let sqrt = Math.sqrt(25);
// console.log(sqrt);

// sum++;
// console.log(sum);


// > => Lebih besar dari
// < => Kurang dari
// >= <= => Lebih besar atau kurang sama dengan dari
// == || && === !==

// OR harus salah satu true untuk jadi true
// AND harus keduanya
// if(sum < 10 || sum >9){
//     console.log("Angka " + sum + " lebih besar atau sama dengan 10");
// }

// let numberTen = "10";
// let ten = 10;

// console.log(numberTen !== ten);

// Conditionals
let ageOfArtika = 20;
// if(ageOfArtika <5){
//     console.log("Artika masih bocil");
// }else if(ageOfArtika < 17){
//     console.log("Artika belum boleh mengemudi");
// }
// else{
//     console.log("Artika sudah boleh mengemudi");
// }

// Ternary
// Condition ? Nilai ketika true : Nilai ketika false
// const stmt = ageOfArtika < 17 ? "Belum boleh mengemudi" : "Sudah bisa mengemudi";
// console.log(stmt);

// for(let i=0;i<=ageOfArtika;i++){
//     console.log("Umur artika setelah berulang tahun adalah " + i);
// }

// functions / methods
// Declaration function , Expression function, arrow function
// Declaration function
function addNumbers(){
    return 5 + 10;
}

// Expression function
const multiplicationNumbers = function(a,b){
    return a*b;
}
// Arrow Function
const square = (x)=>{
    return x**2;
}

console.log(addNumbers());
console.log(multiplicationNumbers(9,9));
console.log(square(10));