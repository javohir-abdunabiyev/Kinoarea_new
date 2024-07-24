import { reload } from "./reload";
import { imagesLoad } from "./imgload";
import { cont } from "../main";
import { getData } from "../lib";

export function genresLoad(item: any) {
    const allMovies = document.createElement("p");
    const genres_a = document.createElement("p");
    allMovies.classList.add("genres_a");
    genres_a.classList.add("genres_a");
    allMovies.innerHTML = "All";
    genres_a.innerHTML = item.name;

    getData("/discover/movie?with_genres=" + item.id)
        .then((res) => {
            genres_a.onclick = () => {
                if(item.name === "All") {
                    location.assign("/")
                    return
                }
                reload(res.results.splice(0, 8), imagesLoad, cont)
                location.assign(`/?with_genres=${item.id}`)
            }
        })
        .catch((error) => {
            console.error(error)
        })

    return genres_a;
}
