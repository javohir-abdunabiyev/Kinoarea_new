import { getData } from "../../lib";
import { headerReaload } from "../../components/header";
import { reload } from "../../components/reload";
import { moviesLoad } from "../../components/moviespageLoad";
import { characters } from "../../components/movieCharacter";
import { actorsImg } from "../../components/actors";
import { poster } from "../../components/moviesposters";

const ab_mv_place = document.querySelector(".ab_mv_place") as HTMLElement
const backdrop = document.querySelector(".backdrop") as HTMLElement
const header: HTMLElement = document.querySelector("header") as HTMLElement
let id: any = location.search.split('=')
id = id[id.length - 1]
const imgstarturl = "https://image.tmdb.org/t/p/original"
const actors_section  = document.querySelector(".actors_section") as HTMLElement
const poster_sec: HTMLElement = document.querySelector(".poster_sec") as HTMLElement
const video = document.querySelector("iframe")


headerReaload(header)

getData(`/movie/${id}`)
    .then(res => {
        console.log(res);
        characters(res)
        
        reload([res], moviesLoad, ab_mv_place)
        backdrop.style.backgroundImage = `url(${imgstarturl + res.backdrop_path})`;
        backdrop.style.backgroundSize = 'cover'; // Добавьте это свойство
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
        console.log(res.backdrops);
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