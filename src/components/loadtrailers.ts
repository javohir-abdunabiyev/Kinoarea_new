import { imgstarturl } from "./imgload"
import { video } from "../main"

const conf = {
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmZlYzRlZjNjNWNlMDZlNzlmNDIyMmNlOWU3M2NhNyIsIm5iZiI6MTcyMTEyNzU4NS4yMTc3MTQsInN1YiI6IjY2OTY0ZWI1Y2UwNzYyNjg3YTgwNzlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWFgh_pXS2HtH8o-elspBnOICNb80dKkj20ikxk_iSM"
    }
};const youtubeUrl: string = "https://www.youtube.com/embed/"

export function videosLoad(item: any) {
    const traielrs_block: HTMLElement = document.createElement("div")
    let play_button = `<svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.8296 12.0167C27.5411 13.5474 27.5411 17.4526 24.8296 18.9833L5.96637 29.6319C3.29989 31.1372 3.72183e-07 29.2106 3.35669e-07 26.1486L8.17023e-08 4.85141C4.51881e-08 1.78939 3.2999 -0.137154 5.96638 1.36812L24.8296 12.0167Z" fill="white"/>
    </svg>
    `

    traielrs_block.onmouseenter = () => {
        play_button = `<svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.8296 12.0167C27.5411 13.5474 27.5411 17.4526 24.8296 18.9833L5.96637 29.6319C3.29989 31.1372 3.72183e-07 29.2106 3.35669e-07 26.1486L8.17023e-08 4.85141C4.51881e-08 1.78939 3.2999 -0.137154 5.96638 1.36812L24.8296 12.0167Z" fill="blue"/>
    </svg>
    `
    }

    traielrs_block.onmouseleave=  () => {
        play_button = `<svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.8296 12.0167C27.5411 13.5474 27.5411 17.4526 24.8296 18.9833L5.96637 29.6319C3.29989 31.1372 3.72183e-07 29.2106 3.35669e-07 26.1486L8.17023e-08 4.85141C4.51881e-08 1.78939 3.2999 -0.137154 5.96638 1.36812L24.8296 12.0167Z" fill="white"/>
    </svg>
    `
    }



    traielrs_block.style.backgroundImage = `url(${imgstarturl + item.backdrop_path})`;

    traielrs_block.classList.add("traielrs_block")


    traielrs_block.onclick = () => {
        fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos`, conf)
            .then(res => res.json())
            .then(res => {
                const vidObj = res.results.find((elem: any) => elem.type === 'Trailer')
                if(video) {
                    video.src = youtubeUrl + vidObj.key
                } else {
                    console.log("iframe не найден");
                    
                }
            })
        
    }

    return traielrs_block

}