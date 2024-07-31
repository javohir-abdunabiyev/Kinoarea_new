import { getData } from "../lib"

export function popularMovies(item: any) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    const movie_name = document.createElement("p")
    const movie_genre = document.createElement("p")
    const votes_div = document.createElement("div")
    div.classList.add("swiper-slide")
    img.classList.add("swiper-img")
    img.classList.add("swiper-slide")
    votes_div.classList.add("votes_div")
    movie_name.innerHTML = item.title
    img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`
    
    getData(`https://api.themoviedb.org/3/account/${item.id}/rated/movies`)
        .then(() => {
            votes_div.innerHTML = item.vote_average
        })

        
    div.append(img, movie_name, movie_genre, votes_div)
    
    return div
}