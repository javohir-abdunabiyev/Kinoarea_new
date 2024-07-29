import { imgstarturl } from "./imgload"
import { video } from "../main"
import { getData } from "../lib";

const youtubeUrl: string = "https://www.youtube.com/embed/"

export function videosLoad(item: any) {
    
    const div_for_trailers = document.createElement("div")
    div_for_trailers.classList.add("div_for_trailers")
    const traielrs_block: HTMLElement = document.createElement("img")
    const movies_name = document.createElement("p")
    const play_button = document.createElement("div")
    play_button.classList.add("play_button")

    movies_name.innerHTML = item.title
    movies_name.classList.add("movies_name")
    traielrs_block.src = imgstarturl + item.backdrop_path
    traielrs_block.classList.add("traielrs_block")

    play_button.innerHTML = `<svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.8296 12.0167C27.5411 13.5474 27.5411 17.4526 24.8296 18.9833L5.96637 29.6319C3.29989 31.1372 3.72183e-07 29.2106 3.35669e-07 26.1486L8.17023e-08 4.85141C4.51881e-08 1.78939 3.2999 -0.137154 5.96638 1.36812L24.8296 12.0167Z" fill="white"/>
    </svg>
    `

    traielrs_block.onmouseenter = () => {
        play_button.innerHTML = `<svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.8296 12.0167C27.5411 13.5474 27.5411 17.4526 24.8296 18.9833L5.96637 29.6319C3.29989 31.1372 3.72183e-07 29.2106 3.35669e-07 26.1486L8.17023e-08 4.85141C4.51881e-08 1.78939 3.2999 -0.137154 5.96638 1.36812L24.8296 12.0167Z" fill="blue"/>
    </svg>
    `
    }

    traielrs_block.onmouseleave=  () => {
        play_button.innerHTML = `<svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.8296 12.0167C27.5411 13.5474 27.5411 17.4526 24.8296 18.9833L5.96637 29.6319C3.29989 31.1372 3.72183e-07 29.2106 3.35669e-07 26.1486L8.17023e-08 4.85141C4.51881e-08 1.78939 3.2999 -0.137154 5.96638 1.36812L24.8296 12.0167Z" fill="white"/>
    </svg>
    `
    }

    getData(`/movie/${item.id}/videos`)
            .then(res => {
                const vidObj = res.results.find((elem: any) => elem.type === 'Trailer')
                traielrs_block.onclick = () => {
                    if(video) {
                        video.src = youtubeUrl + vidObj.key
                    } else {
                        console.log("iframe не найден");
                        
                    }
                }
            })   

    div_for_trailers.append(traielrs_block, movies_name, play_button)

    return div_for_trailers
}