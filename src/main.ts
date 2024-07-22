import Swiper from 'swiper';
import 'swiper/css';


import { Navigation } from 'swiper/modules';



import { headerReaload } from "./components/header"
import { reload } from "./components/reload"
import { imagesLoad } from "./components/imgload"
import { getData } from "./lib"
import { genresLoad } from "./components/genresload"
import { videosLoad } from "./components/loadtrailers"


export const nowplayingMovies: any = ""
export const video = document.querySelector("iframe")
export const cont = document.querySelector(".movies_block") as HTMLElement
export const show_all_images = document.querySelector(".show_all_images") as HTMLButtonElement
export const traielrsCont = document.querySelector(".trailers_list") as HTMLElement
const genresPlace = document.querySelector(".genres_nav") as HTMLElement
const header = document.querySelector(".header") as HTMLElement
const id = location.search.split("=").at(-1)
let showAllMovies: Boolean = false
headerReaload(header)

show_all_images.onclick = () => {
    getData(id ? `/discover/movie?with_genres=${id}` : "/movie/popular")
        .then(res => showOrHide(res.results))
}

if(id) {
    getData("/discover/movie?with_genres=" + id).then((res) => 
    showOrHide(res.results))
} else {
    getData("/movie/popular").then((res) => showOrHide(res.results))
}

function showOrHide(arr: any) {
    if(!showAllMovies) {
        reload(arr, imagesLoad, cont)
        showAllMovies = true
    } else {
        reload(arr.slice(0, 8), imagesLoad, cont)
        showAllMovies = false
    }
}

getData("/movie/now_playing")
    .then(res => {
        reload(res.results, videosLoad, traielrsCont)
    })

getData("/genre/movie/list")
.then(res => {
    reload([{name: "All"}, ...res.genres], genresLoad, genresPlace)
})

new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})