import { imgstarturl } from "./imgload"

export function poster(item: any) {
    const img = document.createElement("img")
    img.src = imgstarturl + item.file_path
    img.classList.add("poster_img")
    return img
}