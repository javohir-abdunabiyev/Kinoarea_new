const imgstarturl = "https://image.tmdb.org/t/p/original"


export function moviesLoad(item: any) {

    const about_movie = document.createElement("div") as HTMLElement
    about_movie.classList.add("about_movie")


    const img = document.createElement("img") as HTMLElement
    img.src = imgstarturl + item.poster_path;
    img.classList.add("movie_poster")

    const about_div = document.createElement("div")
    about_div.classList.add("what_about")

    const h1 = document.createElement("h1") as HTMLElement
    h1.classList.add("mv_title")
    h1.innerHTML = item.title

    const text = document.createElement("p") as HTMLElement
    text.classList.add("text")
    text.innerHTML = item.overview


    const watch_trailer_btn_a = document.createElement("a") as HTMLElement
    const watch_trailer_btn = document.createElement("button") as HTMLElement
    watch_trailer_btn.classList.add("watch_trailer_btn")
    watch_trailer_btn.innerHTML = "Смотреть трейлер"


    watch_trailer_btn_a.append(watch_trailer_btn)
    about_div.append(h1, text,  watch_trailer_btn_a)
    about_movie.append(img, about_div)

    return about_movie

}