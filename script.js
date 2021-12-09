const { response } = require("express");

// const { response } = require("express");
//let name = document.getElementById('name')
//const btn = document.getElementById('btn');

///exports.api =  async
exports.api  =  (req, res)  => {

    let randomNumber = Math.floor((Math.random() * 88) + 1) 
    
    let apiURL = 'https://swapi.dev/api/people/' + randomNumber

    get(apiURL).then(function(response) {
        updateInfo(response.data)
        res.send(response.data)
    })
}

// function updateInfo(data) {
//     name.innerText =data.name
// }

//btn.addEventListener('click',handleClick);

// let fetchData = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// };

// fetchData('https://swapi.dev/api/people/1');

