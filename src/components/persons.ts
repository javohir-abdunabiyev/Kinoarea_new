export function popularPersons(item: any) {
    const img = document.createElement("img")
    img.src = `https://image.tmdb.org/t/p/original${item.profile_path}`

    img.className = "act_img"

    return img
}