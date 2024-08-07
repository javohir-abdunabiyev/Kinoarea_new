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
import { searchFunc } from './components/search';
import axios from 'axios';


export const nowplayingMovies: any = ""
export const video = document.querySelector("iframe")
export const cont = document.querySelector(".movies_block") as HTMLElement
export const show_all_images = document.querySelector(".show_all_images") as HTMLElement
export const traielrsCont = document.querySelector(".trailers_list") as HTMLElement
const close_years_modal = document.querySelector(".close_years_modal") as HTMLElement
const show_all_trailers = document.querySelector(".show_all_trailers") as HTMLElement
const search_answer_place = document.querySelector(".search_answer") as HTMLElement
const search_inp = document.querySelector(".search_inp") as HTMLElement
const form = document.forms.namedItem("subscribe") as HTMLFormElement
const persons_rate = document.querySelector(".persons_rate") as HTMLElement
const first_second_position = document.querySelector(".first_second_position") as HTMLElement
const genres_modal = document.querySelector(".genres_modal") as HTMLDialogElement
const mCont = document.querySelector('.swiper-wrapper') as HTMLElement
const years_date = document.querySelectorAll(".year")
const genresPlace = document.querySelector(".genres_nav") as HTMLElement
const header = document.querySelector(".header") as HTMLElement
const genres_modal_btn = document.querySelector(".genres_modal_btn") as HTMLElement
const release_data = document.querySelector(".release_date") as HTMLDivElement
const years_btn = document.querySelector(".years_btn") as HTMLElement
const years_modal = document.querySelector(".years_modal") as HTMLDialogElement
const top_side = document.querySelector(".top_side") as HTMLElement
let id: any = location.search.split('=')
id = id[id.length - 1]
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
                    }, breakpoints: {
                        320:{
                            slidesPerView: 1
                        },
                        490: {
                            slidesPerView: 1
                        },
                        567: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 2
                        },
                        900: {
                            slidesPerView : 4
                        }
                    }
                });
        });


        function datesFunc() {
            if(window.innerWidth <= 576) {
                top_side.style.display = "flex"
                release_data.style.display = "none"
                years_btn.style.display = "flex"
            } else {
                release_data.style.display = "flex"
                years_btn.style.display = "none"
            }
        }

        window.addEventListener('resize', () => {
            datesFunc()
        });
        datesFunc()


    year.onclick = () => {
        let yearDate = elem.dataset.year;
        years_date.forEach((y: any) => y.classList.remove('active'))

        elem.classList.add('active')

        getData(`/discover/movie?primary_release_year=${yearDate}`)
        .then(res => {
            reload(res.results, popularMovies, mCont);

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
    function updateNavDisplay() {
        if (window.innerWidth <= 576) {
            reload([{name: "All"}, ...res.genres], genresLoad, genres_modal)
            genresPlace.style.display = "none"
            genres_modal_btn.style.display = "block"
            show_all_trailers.style.display = "none"
        } else {
            reload([{name: "All"}, ...res.genres], genresLoad, genresPlace)
            genresPlace.style.display = "flex"
            genres_modal_btn.style.display = "none"
            show_all_trailers.style.display = "flex"
        }
    }

    window.onresize = () => {
        updateNavDisplay()
    }
    updateNavDisplay();
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
        reload(arr.slice(0, 8), imagesLoad, cont)
        showAllMovies = true
        
    } else {
        reload(arr, imagesLoad, cont)
        showAllMovies = false
    }
}


form.onsubmit = (e:  any) => {
    e.preventDefault();

    const fm = new FormData(e.target)

    const app = {
        email: fm.get("email")
    }

    let mail: string = `+ Новый подписчик \n Почта: ${app.email}`


    axios.post(`https://api.telegram.org/bot${"7403629476:AAHFWErr6gveumC9BwS2B7kQlQv4vJWCYsU"}/sendMessage`, {
        chat_id: -1002239673610,
        text: mail,
        mode: "html"
    })


    form.reset()
}


function debounce(func: any, timeout = 600) {
    let timer: any; 
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

const debouncedSearch = debounce((e: any) => {
    getData(`/search/multi?query=${e.target.value}`)
    .then(res => {
        reload(res.results, searchFunc, search_answer_place)
    })
}, 600);

search_inp.onkeyup = debouncedSearch;

genres_modal_btn.onclick = () => {
    genres_modal.showModal()
}

years_btn.onclick = () => {
    years_modal.showModal()
}

close_years_modal.onclick = () => {
    years_modal.close()
}