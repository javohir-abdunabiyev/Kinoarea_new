import Swiper from 'swiper';
import 'swiper/css';
import { headerReaload } from "../../components/header";
import { getData } from "../../lib";
import { reload } from "../../components/reload";
import { actor } from "../../components/actorpage";
import { popularMovies } from "../../components/popularMovies";
import { Navigation } from 'swiper/modules';
import { poster } from "../../components/moviesposters";
import { searchFunc } from "../../components/search";
import axios from "axios";

const header = document.querySelector("header") as HTMLElement;
const mCont = document.querySelector('.swiper-wrapper') as HTMLElement;
const search_inp = document.querySelector(".search_inp") as HTMLElement
const search_answer_place = document.querySelector(".search_answer") as HTMLElement
const form = document.forms.namedItem("subscribe") as HTMLFormElement
let id: any = location.search.split('=');
id = id[id.length - 1];
const actor_posters = document.querySelector(".actor_posters") as HTMLElement;
const actor_bio = document.querySelector(".actor_bio") as HTMLElement;
headerReaload(header);

getData(`/person/${id}`)
    .then(res => {
        reload([res], actor, actor_bio);
    });

getData(`/person/${id}/movie_credits`)
    .then(res => {
        reload(res.cast, popularMovies, mCont);
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


getData(`/person/${id}/images`) 
    .then(res => {
        reload(res.profiles.slice(0, 6), poster, actor_posters)
        function imgresize() {
            if(window.innerWidth <= 768) {
                reload(res.profiles.slice(0, 3), poster, actor_posters)
            } else {
                reload(res.profiles.slice(0, 6), poster, actor_posters)
            }
        }
            window.onresize = () => {
                imgresize()
            };
            imgresize()
    })


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