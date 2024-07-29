import { getData } from "../../lib";
import { headerReaload } from "../../components/header";
import { reload } from "../../components/reload";
import { moviesLoad } from "../../components/moviespageLoad";
import { characters } from "../../components/movieCharacter";
import { actorsImg } from "../../components/actors";


const movie_genres_section = document.querySelector(".movie_genres_section")
const movie_title = document.querySelector(".movie_title")
const ab_mv_place = document.querySelector(".ab_mv_place")
const img = document.querySelector("img");
const body: HTMLElement = document.body
const header: HTMLElement = document.querySelector("header")
const id = location.search.split('=').at(-1);
const imgstarturl = "https://image.tmdb.org/t/p/original"
const p_s = document.createElement("p")
const actors_section  = document.querySelector(".actors_section")


headerReaload(header)

getData(`/movie/${id}`)
    .then(res => {
        console.log(res);
        characters(res)
        
        reload([res], moviesLoad, ab_mv_place)
        body.style.backgroundImage = `url(${imgstarturl + res.backdrop_path})`;
    })
    .catch(error => {
        console.error('Error fetching movie data:', error);
    });


// getData(`movie/${id}/similar`)
//     .then(res => {
//         console.log(res.results);
        
//     })

getData(`/movie/${id}/credits`)
.then(res => {
    reload(res.cast, actorsImg, actors_section)
})
.catch(error => console.error('Ошибка:', error));

