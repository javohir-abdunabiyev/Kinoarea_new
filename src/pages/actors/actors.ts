import { headerReaload } from "../../components/header"
import { getData } from "../../lib"
import { reload } from "../../components/reload"
import { actor } from "../../components/actorpage" 


const header = document.querySelector("header") as HTMLElement
const id = location.search.split('=').at(-1);
const actor_bio = document.querySelector(".actor_bio") as HTMLElement
headerReaload(header)


getData(`/person/${id}`)
.then(res => {
    console.log(res);
    reload([res], actor, actor_bio)
})