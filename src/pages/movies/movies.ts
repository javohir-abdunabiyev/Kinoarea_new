import { getData } from "../../lib";
import { headerReaload } from "../../components/header";
import { reload } from "../../components/reload";
import { moviesLoad } from "../../components/moviespageLoad";
import { characters } from "../../components/movieCharacter";
import { actorsImg } from "../../components/actors";
import { poster } from "../../components/moviesposters";
import { searchFunc } from "../../components/search";
import axios from "axios";

const ab_mv_place = document.querySelector(".ab_mv_place") as HTMLElement
const backdrop = document.querySelector(".backdrop") as HTMLElement
const header: HTMLElement = document.querySelector("header") as HTMLElement
const search_inp = document.querySelector(".search_inp") as HTMLElement
const search_answer_place = document.querySelector(".search_answer") as HTMLElement
const form = document.forms.namedItem("subscribe") as HTMLFormElement
let id: any = location.search.split('=')
id = id[id.length - 1]
const imgstarturl = "https://image.tmdb.org/t/p/original"
const actors_section  = document.querySelector(".actors_section") as HTMLElement
const poster_sec: HTMLElement = document.querySelector(".poster_sec") as HTMLElement
const video = document.querySelector("iframe")


headerReaload(header)

getData(`/movie/${id}`)
    .then(res => {
        characters(res)
        reload([res], moviesLoad, ab_mv_place)
        backdrop.style.backgroundImage = `url(${imgstarturl + res.backdrop_path})`;
        backdrop.style.backgroundSize = 'cover';
    })
    .catch(error => {
        console.error('Error fetching movie data:', error);
    });


getData(`/movie/${id}/credits`)
.then(res => {
    reload(res.cast.slice(0, 10), actorsImg, actors_section)
})
.catch(error => console.error('Ошибка:', error));

getData(`/movie/${id}/images`)
    .then(res => {
        reload(res.backdrops.slice(0, 6), poster, poster_sec)
    })

getData(`/movie/${id}/videos`)
    .then(res => {
        const vidObj = res.results.find((elem: any) => elem.type === 'Trailer')
            if(video) {
                video.src = "https://www.youtube.com/embed/" + vidObj.key
            }
        }
    )

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