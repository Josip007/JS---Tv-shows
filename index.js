import { TvShow } from "./Tvshow.js";


const request = fetch('./data.json')
.then((response) => {
    return response.json();
})
.then((json) => {
    for(let i = 0; i < json.length; i++) {
        const tvShow = new TvShow(json[i].name, json[i].genres[0], json[i].image.original, json[i].url);
        document.body.innerHTML += tvShow.toHtml();
    }
});


console.log(request);