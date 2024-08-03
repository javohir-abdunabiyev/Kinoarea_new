import { imgstarturl } from "./imgload"

export function actorsImg(item: any) {

    const div = document.createElement("div")
    const img = document.createElement("img")
    const name = document.createElement("p") as HTMLElement
    const character = document.createElement("p") as HTMLElement
    img.classList.add("actor_img")
    name.classList.add("actor_name")
    character.classList.add("character")
    name.innerHTML = item.original_name
    character.innerHTML = item.character
    img.src = imgstarturl + item.profile_path

    div.onclick = () => {
        location.assign(`/src/pages/actors/?id=${item.id}`)
    }

    div.append(img, name, character)
    return div
}