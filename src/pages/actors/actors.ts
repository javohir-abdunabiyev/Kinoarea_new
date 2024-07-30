import { headerReaload } from "../../components/header"
import { getData } from "../../lib"
const header = document.querySelector("header") as HTMLElement
headerReaload(header)
const id = location.search.split('=').at(-1);


getData(`/person/${id}}`)
.then(res => {
    console.log(res);
    
})