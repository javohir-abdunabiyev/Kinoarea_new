import { headerReaload } from "../../components/header";
import { getData } from "../../lib";
import { reload } from "../../components/reload";
import { actor } from "../../components/actorpage";
import { popularMovies } from "../../components/popularMovies";
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { poster } from "../../components/moviesposters";

const header = document.querySelector("header") as HTMLElement;
const mCont = document.querySelector('.swiper-wrapper') as HTMLElement;
let id: any = location.search.split('=');
const actor_posters = document.querySelector(".actor_posters") as HTMLElement;
id = id[id.length - 1];
const actor_bio = document.querySelector(".actor_bio") as HTMLElement;
headerReaload(header);

getData(`/person/${id}`)
    .then(res => {
        reload([res], actor, actor_bio);
    });

getData(`/person/${id}/movie_credits`)
    .then(res => {
        reload(res.cast, popularMovies, mCont);
        let swiper: Swiper | null = null;

        function initializeSwiper() {
            let slidesPerView: number;

            if (window.innerWidth <= 576) {
                slidesPerView = 2;
            } else if (window.innerWidth >= 1200) {
                slidesPerView = 4;
            } else {
                slidesPerView = 3;
            }

            return new Swiper('.swiper', {
                modules: [Navigation],
                slidesPerView: slidesPerView,
                spaceBetween: 23,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            });
        }

        swiper = initializeSwiper();

        window.addEventListener('resize', () => {
            if (swiper) {
                swiper.destroy(true, true);
            }
            swiper = initializeSwiper();
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