const nameInput = document.getElementById("nameInput");
const saveNameButton = document.getElementById("saveName");
const logoutButton = document.getElementById("logout");
const greeting = document.getElementById("greeting");


function loadName(){
    const saveName = localStorage.getItem('username');
    if(saveName){
        greeting.textContent = `Welcome ${JSON.parse(saveName)}`;
        nameInput.style.display = "none";
        saveNameButton.style.display = "none";
        logoutButton.style.display = "block"
    }
}

function logout(){
    localStorage.removeItem('username');
    greeting.textContent = "Please enter your name: "
    nameInput.style.display = "inline-block";
    saveNameButton.style.display = "inline-block";
    logoutButton.style.display = "none"
    nameInput.value = "";
}


function saveName(){
    const userName = nameInput.value.trim();

    if(!userName){
        alert("Please enter a valid username!");
        return
    }

    localStorage.setItem("username", JSON.stringify(userName));
    greeting.textContent = `Welcome ${userName}`;
    nameInput.style.display = "none";
    saveNameButton.style.display = "none";
    logoutButton.style.display = "block"
}

saveNameButton.addEventListener('click', saveName);
logoutButton.addEventListener('click', logout);

loadName();

