import { Template } from "../types/createInitObject"
import { customEvent, entityEvent, playerEvent } from "../types/events"
import Zlib from "zlib";
export function exportTemplate(template: Template): Promise<string> {
    var block = ""
    
    if ((<customEvent>template.event).eventType) block = (<customEvent>template.event).eventType; else block = "event"
    if (block != "event") var object2 = JSON.stringify({
        blocks: [
            {
                id: "block",
                block: block,
                args: identifyArgs(block),
                data: (<customEvent>template.event).name
            }
        ]
    }); else var object = JSON.stringify({
        blocks: [
            {
                id: "block",
                block: block,
                action: template.event,
                args: identifyArgs(block),
                
            }
        ]
    });
    console.log(template.event)

    
    return new Promise<string>((resolve, reject) => {
        if (object == undefined) {
            Zlib.gzip(object2, (err, result) => {
                if (err) {
                    reject(err.message)
                } else {
                    resolve( JSON.stringify({
                        author: template.author,
                        name: template.name,
                        version: template.version,
                        code: result.toString("base64")
                    })
                        
                    )
                }
            })
        } else {
            Zlib.gzip(object, (err, result) => {
                if (err) {
                    reject(err.message)
                } else {
                    resolve( JSON.stringify({
                        author: template.author,
                        name: template.name,
                        version: template.version,
                        code: result.toString("base64")
                    })
                        
                    )
                }
            })
        }
        
    })
}

function identifyArgs(block: string): Object {
    if (block == "process" || block == "func") {
        return {
            items: [
                {
                    item: {
                        id: "bl_tag",
                        data: {
                            option: "False",
                            tag: "Is Hidden",
                            action: "dynamic",
                            block: "func"
                        }
                    },
                    slot: 26
                }
            ]
        }
    } else {
        return {items: []}
    }
}
