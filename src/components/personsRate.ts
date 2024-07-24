export function rate(item: any) {
    const div = document.createElement("div")
    div.classList.add("div_person")
    const personName = document.createElement("p")
    personName.innerHTML = item.name
    const popularity = document.createElement("p")
    popularity.classList.add("popularity")
    popularity.innerHTML = item.popularity

    div.append(personName, popularity)

    return div
}