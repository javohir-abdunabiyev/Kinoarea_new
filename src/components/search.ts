import { imgstarturl } from "./imgload"


export function searchFunc(item: any) {
    const div = document.createElement("div")
    div.classList.add("search_answer_div")
    const img = document.createElement("img")
    img.classList.add("searchPoster")

    img.src = imgstarturl + item.poster_path

    if(!item.poster_path) {
        img.src = imgstarturl + item.profile_path
    }

    const movieName_div = document.createElement("div")
    const movie_name = document.createElement("p")

    if(!item.title) {
        movie_name.innerHTML = item.name
    } else {
        movie_name.innerHTML = item.title
    }

    div.onclick = () => {
        if(item.name) {
            location.assign(`/src/pages/actors/?id=${item.id}`)
        } else if (item.title) {
            location.assign(`/src/pages/movies/?id=${item.id}`)
        }
    }

    movieName_div.append(movie_name)


    div.append(img, movieName_div)
    
    return div
}