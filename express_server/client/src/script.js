const axios = require("axios");
const { apiUrl } = require("./constants");

const planets = [];
const planetList = document.createElement('ul');
const body = document.getElementsByTagName('body')[0];
body.appendChild(planetList);
const getAllPlanets = () => {
    axios.get(`${apiUrl}planets/`)
        .then(data => {
            planets = [...planets, ...data.data.results];
            const url = data.data.next;
            for (let index = 1; index < data.data.count / 10; index++) {
                axios.get(`${url.slice(0, url.length - 1)}${index + 1}`)
                    .then((response) => {
                        planets = [...planets, ...response.data.results];
                        if (planets.length === response.data.count) {
                            planets.forEach(el => {
                                let planetItem = document.createElement('li');
                                planetList.appendChild(planetItem);
                                planetItem.innerHTML += el.name;
                            })
                        }
                    })
            }
        })
};

getAllPlanets();
