// df.js
import {createTemplate} from "./src/types/createInitObject"
import { playerEvent } from "./src/types/events"
import { entityEvent } from "./src/types/events"

import { exportTemplate } from "./src/make/exportTemplate"

enum Events {"playerEvent" = playerEvent, "entityEvent" = entityEvent}

export default {createTemplate, exportTemplate}
