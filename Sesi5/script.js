// Sync vs Async
// console.log(1);
// console.log(2);
// console.log(3);

// console.log(1);
// setTimeout(()=>console.log(2), 1000);
// console.log(3);

const url = "https://restcountries.com/v3.1/all";

// const datas = fetch(url).then(res=>res.json()).then(data=>console.log(data));

async function getData(){    
    const res = await fetch(url);
    const datas = await res.json();

    if(!res.ok){
        window.alert("Terjadi kesalahan pada sistem");
    }
    try{
        console.log(datas);
    }catch(error){
        console.log(error);
    }

}

getData();