import { headerReaload } from "../../components/header"
import { getData } from "../../lib"
import { reload } from "../../components/reload"
import { actor } from "../../components/actorpage" 


const header = document.querySelector("header") as HTMLElement
let id: any = location.search.split('=')
id = id[id.length - 1]
const actor_bio = document.querySelector(".actor_bio") as HTMLElement
headerReaload(header)


getData(`/person/${id}`)
.then(res => {
    console.log(res);
    reload([res], actor, actor_bio)
})