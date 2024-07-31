import { imgstarturl } from "./imgload"

export function searchFunc(item: any) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    img.classList.add("searchPoster")

    img.src = imgstarturl + item.poster_path


    const movieName_div = document.createElement("div")
    const movie_name = document.createElement("p")

    if(!item.title) {
        movie_name.innerHTML = item.name
    } else {
        movie_name.innerHTML = item.title
    }


    movieName_div.append(movie_name)


    div.append(img, movieName_div)
    
    return div
}