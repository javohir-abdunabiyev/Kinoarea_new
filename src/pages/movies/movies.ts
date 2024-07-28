import { getData } from "../../lib";
import { headerReaload } from "../../components/header";
import { reload } from "../../components/reload";
import { moviesLoad } from "../../components/moviespageLoad";

const body: HTMLElement = document.body
const imgstarturl = "https://image.tmdb.org/t/p/original"
const id = location.search.split('=').at(-1);
const header: HTMLElement = document.querySelector("header")
const img = document.querySelector("img");
const movie_title = document.querySelector(".movie_title")
const ab_mv_place = document.querySelector(".ab_mv_place")

headerReaload(header)

getData(`/movie/${id}`)
    .then(res => {
        reload([res], moviesLoad, ab_mv_place)
        body.style.backgroundImage = `url(${imgstarturl + res.backdrop_path})`;
    })
    .catch(error => {
        console.error('Error fetching movie data:', error);
    });
