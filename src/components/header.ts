const search_modal = document.querySelector(".search_modal") as HTMLDialogElement

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
    search.type = "button"
    nav.classList.add("nav")
    search.classList.add("search_btn")
    one_a.innerHTML = "Афиша"
    two_a.innerHTML = "Медиа"
    three_a.innerHTML = "Фильмы"
    four_a.innerHTML = "Актёры"
    five_a.innerHTML = "Новости"
    six_a.innerHTML = "Подборки"
    seven_a.innerHTML = "Категории"
    signin.innerHTML = "Войти"
    logo.src = "/img/logo.png"

    signin.onmouseenter = () => {
        signin.classList.add("btn_shadow")
    }

    signin.onmouseleave = () => {
        signin.classList.remove("btn_shadow")
        signin.style.transition = ".2s ease-in"
    }

    search.onclick = () => {
        search_modal.showModal()
    }

    signin_a.append(signin)
    search_and_signin.append(search, signin)
    nav.append(one_a, two_a, three_a, four_a, five_a, six_a, seven_a, )
    place.append(logo, nav, search_and_signin)
} 