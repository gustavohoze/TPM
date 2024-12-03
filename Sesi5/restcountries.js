const url = "https://restcountries.com/v3.1/all";
const container = document.querySelector("#countriesContainer");

async function getData(){
    try{
    const datas = await fetch(url).then(res=>res.json());
    datas.forEach((data)=>{
        const divCard = document.createElement('div');
        const divCardBody = document.createElement('div');
        const img = document.createElement('img');
        const h5 = document.createElement('h5');
        const p = document.createElement('p');
        const a = document.createElement('a');
        divCard.classList.add("card");
        divCard.setAttribute("style", "width: 18rem;");
        img.classList.add("card-img-top");
        divCardBody.classList.add("card-body");
        h5.classList.add("card-title");
        p.classList.add("card-text");
        a.classList.add("btn", "btn-primary");
        img.src = data.flags.png;
        img.alt = `${data.name.common}'s flag`;
        h5.textContent = data.name.common;
        p.textContent = data?.capital?.[0];
        a.textContent = "Go somewhere";
        divCard.appendChild(img);
        divCardBody.appendChild(h5);
        divCardBody.appendChild(p);
        divCardBody.appendChild(a);
        divCard.appendChild(divCardBody);
        container.appendChild(divCard);
    });

    }catch(error){
        console.log(error);
    }
}

getData();