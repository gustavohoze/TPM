const colorButton = document.querySelector('#colorButton');

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let colors = "#";
    for(let i=0;i<6;i++){
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}

function changeBackgroundColor(){
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

colorButton.addEventListener('click', changeBackgroundColor);