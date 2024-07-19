export function headerReaload(place: HTMLElement) {
    place.innerHTML = ""

    const logo = document.createElement("img")
    logo.src = "/img/logo.png"

    const nav = document.createElement("nav")
    nav.classList.add("nav")
    const one_a = document.createElement("a")
    const two_a = document.createElement("a")
    const three_a = document.createElement("a")
    const four_a = document.createElement("a")
    const five_a = document.createElement("a")
    const six_a = document.createElement("a")
    const seven_a = document.createElement("a")


    one_a.innerHTML = "Афиша"
    two_a.innerHTML = "Медиа"
    three_a.innerHTML = "Фильмы"
    four_a.innerHTML = "Актёры"
    five_a.innerHTML = "Новости"
    six_a.innerHTML = "Подборки"
    seven_a.innerHTML = "Категории"

    const search_and_signin = document.createElement("div")
    search_and_signin.classList.add("search_and_signin")
    const search = document.createElement("input")
    search.type = "search"
    const signin_a = document.createElement("a")
    const signin = document.createElement("button")
    signin.innerHTML = "Войти"


    signin.onmouseenter = () => {
        signin.classList.add("btn_shadow")
    }

    signin.onmouseleave = () => {
        signin.classList.remove("btn_shadow")
        signin.style.transition = ".2s ease-in"
    }


    signin_a.append(signin)
    search_and_signin.append(search, signin)
    nav.append(one_a, two_a, three_a, four_a, five_a, six_a, seven_a, )
    place.append(logo, nav, search_and_signin)


}