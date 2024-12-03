//Synchronus
// console.log(1);
// console.log(2);
// setTimeout(() => {console.log(3), 1000});
// console.log(4);
/*
const url = "https://restcountries.com/v3.1/all"
//by default fetch() is asynchronus and  using method GET
const data = fetch(url).then(response => response.json()).then(data => console.log(data)) 
console.log(data); //dijalankan duluan
*/
const url = "https://restcountries.com/v3.1/all"
//Many people prefer to use async/await instead of .then() and .catch()
async function getData(){
  const res = await fetch(url);
  const data = await res.json();
  if(!res.ok){
    window.alert("Terjadi kesalahan saat mengambil data");
  }
  try {
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();