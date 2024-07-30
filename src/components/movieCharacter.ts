const realise_year = document.querySelectorAll(".realise_year")
const movie_country = document.querySelector(".movie_country")
const id = location.search.split('=').at(-1);
const slogan = document.querySelector(".tagline")
const genre = document.querySelector(".genre")
const movie_time = document.querySelector(".movie_time")
const gather = document.querySelector(".gather")

export function characters(item: any) {
    movie_time.innerHTML += ' ' + item.runtime + ' ' + 'мин.'
    gather.innerHTML += ' ' + item.budget + '$'
    slogan.innerHTML += ' ' + ` " ${item.tagline} "`
    realise_year.forEach((year: any) => {
        year.innerText += ' ' + item.release_date.slice(0, 4)
    })
    item.production_countries.forEach((elem: any) => {
        movie_country.innerHTML += ' ' + elem.iso_3166_1 + ', ' + elem.name
    })
    item.genres.forEach((el: any) => {
        genre.innerHTML += ' ' + el.name + ','
    })
}