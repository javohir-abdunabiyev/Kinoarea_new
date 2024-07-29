import { imgstarturl } from "./imgload"

export function actorsImg(item: any) {

    const div = document.createElement("div")


    const img = document.createElement("img")
    img.src = imgstarturl + item.profile_path
    img.classList.add("actor_img")

    const name = document.createElement("p") as HTMLElement
    name.classList.add("actor_name")
    name.innerHTML = item.original_name

    const character = document.createElement("p") as HTMLElement
    character.classList.add("character")
    character.innerHTML = item.character


    div.append(img, name, character)
    return div
}