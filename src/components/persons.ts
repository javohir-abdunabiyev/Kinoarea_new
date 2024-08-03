export function popularPersons(item: any) {
    const img = document.createElement("img")
    img.src = `https://image.tmdb.org/t/p/original${item.profile_path}`

    img.className = "act_img"

    img.onclick = () => {
        location.assign(`/src/pages/actors/?id=${item.id}`)
    }


    return img
}