let button = document.getElementById('btn');
let button2 = document.getElementById('btn2');

// let button = document.createElement('button');
// button.textContent = 'send a request'

// parent.appendChild(button);
button.addEventListener('click', showClient);
// button.class = "bttn-stretch"
// button.class= 'bttn-md bttn-success'


function showClient(){
    // button.style.display = "none";
    // button2.style.display = "none";
    let client = document.getElementById("client");
    if (client.style.display === "none") {
      client.style.display = "block";
    } 
    client.addEventListener('click', showReq)
}

function showReq(){
    let req = document.getElementById("req");
    if (req.style.display === "none") {
      req.style.display = "block";
    }
    req.addEventListener('click', showServer)
}


function showServer(){
    let server = document.getElementById("server");
    if (server.style.display === "none") {
      server.style.display = "block";
    } 
    server.addEventListener('click', showRes)
}



function showRes(){
    let res = document.getElementById("res");
    if (res.style.display === "none") {
      res.style.display = "block";
    }
    res.addEventListener('click', showResult)
}

function showResult(){
    let result = document.getElementById("result");
    if (result.style.display === "none") {
      result.style.display = "block";
    } 
}