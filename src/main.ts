import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { rate } from './components/personsRate';
import { popularPersons } from './components/persons';
import { popularMovies } from './components/popularMovies';
import { headerReaload } from "./components/header"
import { reload } from "./components/reload"
import { imagesLoad } from "./components/imgload"
import { getData } from "./lib"
import { genresLoad } from "./components/genresload"
import { videosLoad } from "./components/loadtrailers"


export const nowplayingMovies: any = ""
const persons_rate = document.querySelector(".persons_rate") as HTMLElement
const first_second_position = document.querySelector(".first_second_position") as HTMLElement
export const video = document.querySelector("iframe")
export const cont = document.querySelector(".movies_block") as HTMLElement
export const show_all_images = document.querySelector(".show_all_images") as HTMLButtonElement
export const traielrsCont = document.querySelector(".trailers_list") as HTMLElement
// const search_inp = document.querySelector(".search_inp") as HTMLElement
const mCont = document.querySelector('.swiper-wrapper') as HTMLElement
const years_date = document.querySelectorAll(".year")
const genresPlace = document.querySelector(".genres_nav") as HTMLElement
const header = document.querySelector(".header") as HTMLElement
const id = location.search.split("=").at(-1)
let showAllMovies: Boolean = false
headerReaload(header)

years_date.forEach((year: any) => {
    const elem = year as HTMLElement;

    getData(`/discover/movie?primary_release_year=${elem.dataset.year}`)
        .then(res => {
            reload(res.results, popularMovies, mCont);
            new Swiper('.swiper', {
                modules: [Navigation],
                slidesPerView: 4,
                spaceBetween: 23,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            });
        });
    year.onclick = () => {
        let yearDate = elem.dataset.year;
        years_date.forEach((y: any) => y.classList.remove('active'))

        elem.classList.add('active')

        getData(`/discover/movie?primary_release_year=${yearDate}`)
        .then(res => {
            reload(res.results, popularMovies, mCont);

            new Swiper('.swiper', {
                modules: [Navigation],
                slidesPerView: 4,
                spaceBetween: 23,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            });

            if(year.dataset.year === 'all') {
                reload(res.results, popularMovies, mCont)
            }
        });
    }
});

show_all_images.onclick = () => {
    getData(id ? `/discover/movie?with_genres=${id}` : "/movie/popular")
        .then(res => showOrHide(res.results))
}

getData("/movie/now_playing")
.then(res => {
    reload(res.results, videosLoad, traielrsCont)
})

getData("/genre/movie/list")
.then(res => {
    reload([{name: "All"}, ...res.genres], genresLoad, genresPlace)
})


getData("/person/popular")
    .then(res => {
        reload(res.results.slice(0, 2), popularPersons, first_second_position)
        reload(res.results, rate, persons_rate)
    })

if(id) {
    getData("/discover/movie?with_genres=" + id).then((res) => 
    showOrHide(res.results))
} else {
    getData("/movie/popular")
        .then((res) => {
            showOrHide(res.results);
        })
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


