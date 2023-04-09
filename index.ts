// df.js
import {createTemplate} from "./src/types/createInitObject"
import { playerEvent } from "./src/types/events"
import { makeTemplate } from "./src/make/makeTemplate"

export default {createTemplate, makeTemplate}
makeTemplate(createTemplate("DeveloLongScript", "test", playerEvent.playerJoinEvent)).then((result) => {
    console.log(result)
}).catch((a) => {
    console.log("a " + a)
})