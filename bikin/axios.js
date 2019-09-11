//pemanggilan library axios
const axios = require('axios');

//url api
const url = 'https://rickandmortyapi.com/api/character';

// ACTION GET METHOD
axios.get(url).then(res => {
    //jika sukses akan tertampil disini
    console.log(res.data);
}).catch(err => {
    //jika error akan tertampil disini
    console.log(err);
})