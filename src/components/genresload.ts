import axios from "axios";
import { reload } from "./reload";
import { imagesLoad } from "./imgload";
import { cont, show_all_images, traielrsCont } from "../main";
import { videosLoad } from "./loadtrailers";

const discovermovie: string = "https://api.themoviedb.org/3/discover/movie?with_genres=";

const apiKey: string = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmZlYzRlZjNjNWNlMDZlNzlmNDIyMmNlOWU3M2NhNyIsIm5iOiJjYmZlYzRlZjNjNWNlMDZlNzlmNDIyMmNlOWU3M2NhNyIsInN1YiI6IjY2OTY0ZWI1Y2UwNzYyNjg3YTgwNzlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWFgh_pXS2HtH8o-elspBnOICNb80dKkj20ikxk_iSM";

let show_all_movies: Boolean = false;

export function genresLoad(item: any) {
    const allMovies = document.createElement("p");
    allMovies.innerHTML = "All";
    allMovies.classList.add("genres_a");
    const genres_a = document.createElement("p");
    genres_a.classList.add("genres_a");
    genres_a.innerHTML = item.name;

    if (item.id) {
        genres_a.onclick = () => {
            axios.get(discovermovie + item.id, {
                headers: {
                    Authorization: apiKey
                }
            })
            .then(res => {
                cont.innerHTML = "";
                reload(res.data.results.splice(0, 8), imagesLoad, cont);
                traielrsCont.innerHTML = "";
                reload(res.data.results.splice(0, 8), videosLoad, traielrsCont);
                show_all_movies = false;

                show_all_images.onclick = () => {
                        reload(res.data.results, imagesLoad, cont);
                        reload(res.data.results, videosLoad, traielrsCont);
                        show_all_movies = true;
                };
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        };
    } else {
        console.error('No genre ID provided');
    }

    return genres_a;
}
