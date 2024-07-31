export const imgstarturl: URL = new URL("https://image.tmdb.org/t/p/original");

const backdrop = document.querySelector(".backdrop") as HTMLElement

export function imagesLoad(item: any) {
    const img_div: HTMLElement = document.createElement("div")
    const img = document.createElement("img")
    const img_title: HTMLElement = document.createElement("p")
    img.src = imgstarturl + item.poster_path
    img_title.innerHTML = item.title
    
        img.onmouseenter = () => {
            backdrop.style.background = `url(${imgstarturl + item.backdrop_path})`;
            backdrop.style.backgroundSize = 'cover';
        };
        
    img.onclick = () => {
        location.assign(`/src/pages/movies/?id=${item.id}`)
    }

    img_div.append(img, img_title)

return img_div
}