import { imgstarturl } from "./imgload"

export function actor(item: any) {
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
    txt_carrier.innerHTML = "Карьера"
    const carrier_answer = document.createElement("p")
    carrier_answer.innerHTML = ""


    const height_div = document.createElement("div")
    height_div.classList.add("bio_div")
    const height_txt = document.createElement("p")
    height_txt.innerHTML = "Рост"
    const person_height = document.createElement("p")


    const birthday_div = document.createElement("div")
    birthday_div.classList.add("bio_div")
    const birthday_txt = document.createElement("p")
    birthday_txt.innerHTML = "Дата рождения"
    const birthday = document.createElement("p")
    birthday.innerHTML = item.birthday




    birthday_div.append(birthday_txt, birthday)
    height_div.append(height_txt, person_height)
    carrier.append(txt_carrier, carrier_answer)
}