import { getData } from "../lib"

export function headerReaload(place: HTMLElement) {
    place.innerHTML = ""

    const logo = document.createElement("img")
    const one_a = document.createElement("a")
    const two_a = document.createElement("a")
    const three_a = document.createElement("a")
    const four_a = document.createElement("a")
    const five_a = document.createElement("a")
    const six_a = document.createElement("a")
    const seven_a = document.createElement("a")
    const nav = document.createElement("nav")
    const search_and_signin = document.createElement("div")
    const search = document.createElement("input")
    const signin_a = document.createElement("a")
    const signin = document.createElement("button")
    search_and_signin.classList.add("search_and_signin")
    nav.classList.add("nav")
    search.className = "search_inp"
    one_a.innerHTML = "Афиша"
    two_a.innerHTML = "Медиа"
    three_a.innerHTML = "Фильмы"
    four_a.innerHTML = "Актёры"
    five_a.innerHTML = "Новости"
    six_a.innerHTML = "Подборки"
    seven_a.innerHTML = "Категории"
    signin.innerHTML = "Войти"
    logo.src = "/img/logo.png"
    search.type = "search"

    signin.onmouseenter = () => {
        signin.classList.add("btn_shadow")
    }

    signin.onmouseleave = () => {
        signin.classList.remove("btn_shadow")
        signin.style.transition = ".2s ease-in"
    }

    search.onkeyup = () => {
        getData(`/search/multi?query=${search.value}`)
            .then(res => {
                console.log(res);
            })
    }

    signin_a.append(signin)
    search_and_signin.append(search, signin)
    nav.append(one_a, two_a, three_a, four_a, five_a, six_a, seven_a, )
    place.append(logo, nav, search_and_signin)
}