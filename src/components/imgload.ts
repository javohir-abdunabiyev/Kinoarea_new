export const imgstarturl: URL = new URL("https://image.tmdb.org/t/p/original");

const body: HTMLElement = document.body

export function imagesLoad(item: any) {
    const img_div: HTMLElement = document.createElement("div")
    const img = document.createElement("img")
    const img_title: HTMLElement = document.createElement("p")
    img.src = imgstarturl + item.poster_path
    img_title.innerHTML = item.title
    
    img.onmouseenter = () => {
        body.style.backgroundImage = `url(${imgstarturl + item.backdrop_path})`;
        body.style.transition = ".3s ease-in"
    };

    img_div.append(img, img_title)

return img_div
}