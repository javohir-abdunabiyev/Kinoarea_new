import { getData } from "../lib";

const realise_year = document.querySelectorAll(".realise_year")
const movie_country = document.querySelector(".movie_country")
const id = location.search.split('=').at(-1);
const slogan = document.querySelector(".tagline")
const genre = document.querySelector(".genre")
const movie_time = document.querySelector(".movie_time")


export function characters(item: any) {
    realise_year.forEach((year: any) => {
        year.innerText += ' ' + item.release_date.slice(0, 4)
    })
    item.production_countries.forEach((elem: any) => {
        movie_country.innerHTML += ' ' + elem.iso_3166_1 + ', ' + elem.name
    })

    slogan.innerHTML += ' ' + ` " ${item.tagline} "`

    item.genres.forEach((el: any) => {
        genre.innerHTML += ' ' + el.name + ','
    })

    // const nowDate = new Date().toLocaleDateString()
    // console.log(nowDate);
    
    movie_time.innerHTML += ' ' + item.runtime + ' ' + 'мин.'

}



