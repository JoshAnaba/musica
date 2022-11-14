import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist/',
  params: {id: '37i9dQZF1DX4Wsb4d7NKfP'},
  headers: {
    'X-RapidAPI-Key': '41a22a1a47mshc354be735a50f32p1aed95jsn43111f9c342b',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// const axiosApi = (url, params)