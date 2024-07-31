import { imgstarturl } from "./imgload"

export function actor(item: any) {

    const div_for_all = document.createElement("div")
    div_for_all.classList.add("div_for_all")

    const img = document.createElement("img")
    img.classList.add("actor_poster")
    img.src = imgstarturl + item.profile_path

    const bio = document.createElement("div")
    bio.classList.add("bio")

    const actor_name = document.createElement("h1")
    actor_name.classList.add("act_bio_name")
    actor_name.innerHTML = item.name

    const carrier = document.createElement("div")
    carrier.classList.add("bio_div")
    const txt_carrier = document.createElement("p")
    txt_carrier.classList.add("bio_txt")
    txt_carrier.innerHTML = "Карьера:"
    const carrier_answer = document.createElement("p")
    carrier_answer.innerHTML = ""


    const height_div = document.createElement("div")
    height_div.classList.add("bio_div")
    const height_txt = document.createElement("p")
    height_txt.classList.add("bio_txt")
    height_txt.innerHTML = "Рост:"
    const person_height = document.createElement("p")
    person_height.innerHTML = ""


    const birthday_div = document.createElement("div")
    birthday_div.classList.add("bio_div")
    const birthday_txt = document.createElement("p")
    birthday_txt.classList.add("bio_txt")
    birthday_txt.innerHTML = "Дата рождения:"
    const birthday = document.createElement("p")
    birthday.classList.add("bio_answer")
    birthday.innerHTML = ' ' + item.birthday

    const country_div = document.createElement("div")
    country_div.classList.add("bio_div")
    const country_txt = document.createElement("p")
    country_txt.classList.add("bio_txt")
    country_txt.innerHTML = "Место рождения:"
    const country = document.createElement("p")
    country.classList.add("bio_answer")
    country.innerHTML = ' ' + item.place_of_birth


    const genres_div = document.createElement("div")
    genres_div.classList.add("bio_div")
    const genres_txt = document.createElement("p")
    genres_txt.classList.add("bio_txt")
    genres_txt.innerHTML = "Жанры:"
    const genres = document.createElement("p")
    genres.innerHTML = ""
    

    const allMovies_div = document.createElement("div")
    allMovies_div.classList.add("bio_div")
    const allMovies_txt = document.createElement("p")
    allMovies_txt.classList.add("bio_txt")
    allMovies_txt.innerHTML = "Всего фильмов:"
    const allMovies = document.createElement("p")
    allMovies.innerHTML = ""



    allMovies_div.append(allMovies_txt, allMovies)
    genres_div.append(genres_txt, genres)
    country_div.append(country_txt, country)
    birthday_div.append(birthday_txt, birthday)
    height_div.append(height_txt, person_height)
    carrier.append(txt_carrier, carrier_answer)

    bio.append(actor_name, carrier, height_div, birthday_div, country_div, genres_div, allMovies_div)

    div_for_all.append(img, bio)
    return div_for_all
}