const search_modal = document.querySelector(".search_modal") as HTMLDialogElement;
const close_modal = document.querySelector(".close_modal") as HTMLElement;
const body: HTMLElement = document.body;

export function headerReaload(place: HTMLElement) {
    place.innerHTML = "";

    const logo = document.createElement("img");
    const two_logo = document.createElement("img")
    const one_a = document.createElement("a") as HTMLElement;
    const two_a = document.createElement("a") as HTMLElement;
    const three_a = document.createElement("a") as HTMLElement;
    const four_a = document.createElement("a") as HTMLElement;
    const five_a = document.createElement("a") as HTMLElement;
    const six_a = document.createElement("a") as HTMLElement;
    const seven_a = document.createElement("a") as HTMLElement;
    const nav = document.createElement("nav") as HTMLElement;
    const search_and_signin = document.createElement("div") as HTMLElement;
    const search = document.createElement("input");
    const signin_a = document.createElement("a") as HTMLElement;
    const signin = document.createElement("button") as HTMLElement;
    const showModal_btn = document.createElement("input");
    const menu_modal = document.createElement("dialog");
    const menu_div = document.createElement("div") as HTMLElement;
    const close_menu = document.createElement("input")


    close_menu.classList.add("close_menu")
    search_and_signin.classList.add("search_and_signin");
    menu_modal.classList.add("menu_modal");
    menu_div.classList.add("menu_div");
    showModal_btn.classList.add("search_btn");
    search.classList.add("search_btn");
    nav.classList.add("nav");
    close_menu.type = "button"
    close_menu.value = "x"
    menu_div.innerHTML = "Афиша, </br> Медиа, </br> Фильмы, </br> Актёры, </br> Новости, </br> Подборки, </br> Категории,</br> Войти";
    showModal_btn.value = "M";
    showModal_btn.style.color = "grey";
    showModal_btn.type = "button";
    search.type = "button";
    one_a.innerHTML = "Афиша";
    two_a.innerHTML = "Медиа";
    three_a.innerHTML = "Фильмы";
    four_a.innerHTML = "Актёры";
    five_a.innerHTML = "Новости";
    six_a.innerHTML = "Подборки";
    seven_a.innerHTML = "Категории";
    signin.innerHTML = "Войти";
    two_logo.src = "/img/logo.png";
    logo.src = "/img/logo.png";

    function updateNavDisplay() {
        if (window.innerWidth <= 992) {
            one_a.classList.add("margin");
            two_a.classList.add("margin");
            three_a.classList.add("margin");
            four_a.classList.add("margin");
            five_a.classList.add("margin");
            six_a.classList.add("margin");
            seven_a.classList.add("margin");
            signin.classList.add("margin");
            logo.classList.add("margin");
            nav.style.display = "none";
        } else {
            one_a.classList.remove("margin");
            two_a.classList.remove("margin");
            three_a.classList.remove("margin");
            four_a.classList.remove("margin");
            five_a.classList.remove("margin");
            six_a.classList.remove("margin");
            seven_a.classList.remove("margin");
            signin.classList.remove("margin");
            logo.classList.remove("margin");
            nav.style.display = "flex";
        }
    }

    signin.onmouseenter = () => {
        signin.classList.add("btn_shadow");
    };

    signin.onmouseleave = () => {
        signin.classList.remove("btn_shadow");
        signin.style.transition = ".2s ease-in";
    };

    showModal_btn.onclick = () => {
        menu_modal.showModal();
    };

    close_menu.onclick = () => {
        menu_modal.close()
    }

    logo.onclick = () => {
        location.assign("/");
    };

    search.onclick = () => {
        search_modal.showModal();
    };

    close_modal.onclick = () => {
        search_modal.close();
    };

    window.onresize = () => {
        updateNavDisplay()
    }
    updateNavDisplay();

    body.append(menu_modal);
    menu_modal.append(two_logo, menu_div, close_menu);
    signin_a.append(signin);
    search_and_signin.append(showModal_btn, search, signin);
    nav.append(one_a, two_a, three_a, four_a, five_a, six_a, seven_a);
    place.append(logo, nav, search_and_signin);
}
