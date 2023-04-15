import { Template } from "../types/createInitObject"
import { customEvent, entityEvent, playerEvent } from "../types/events"
import Zlib from "zlib";import WebSocket from "ws"
export function exportTemplate(template: Template, templateResult : TemplateResult): Promise<string> {

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
        if (templateResult == 3) {
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
        } else if (templateResult == 1) {
            
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
                            var data = {
                                author: template.author,
                                name: template.name,
                                version: template.version,
                                data: result.toString("base64")
                            }
                            const ws = new WebSocket('ws://localhost:31371/codeutilities/item');
                            ws.on('error', reject);
                            ws.on('message', msg => console.log(msg + " "));
                            ws.on('open', function open() {
                                
                                

                                ws.send(JSON.stringify({
                                    type: 'template',
                                    data: JSON.stringify(data),
                                    source: 'from ' + data.author
                                }));
                                resolve("Success")
                            });
                            
                        }
                    })
                };
            }
            else if (templateResult == 2) {
            
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
                            }))
                        }
                    })
                } else {
                    Zlib.gzip(object, (err, result) => {
                        if (err) {
                            reject(err.message)
                        } else {
                            var data = {
                                author: template.author,
                                name: template.name,
                                version: template.version,
                                data: result.toString("base64") // just as a note. WHY??? why do u need the code property to be data?? (and thats just a socket thing??!?)
                            }
                            const ws = new WebSocket('ws://localhost:31371/codeutilities/item');
                            ws.on('error', reject);
                            ws.on('message', msg => console.log(msg + " "));
                            ws.on('open', function open() {
                                
                                

                                ws.send(JSON.stringify({
                                    type: 'template',
                                    data: JSON.stringify(data),
                                    source: 'from df.js'
                                }));
                                resolve("Success")
                            });
                            
                        }
                    })
                };
            }
            else if (templateResult == 0) {
            
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
                            }))
                        }
                    })
                } else {
                    Zlib.gzip(object, (err, result) => {
                        if (err) {
                            reject(err.message)
                        } else {
                            var data = {
                                author: template.author,
                                name: template.name,
                                version: template.version,
                                code: result.toString("base64")
                            }
                            resolve(`/dfgive ${template.block}{display:{Name:'{"text":"${data.name}"}'},PublicBukkitValues:{"hypercube:codetemplatedata":'{name:"${data.name}",code:"${data.code}",version:"${data.version}",author:"${data.author}"}'}} 1`)
                            
                        }
                    })
                };
            }
        
    })
}

export enum TemplateResult {
    "recodeBuiltIn", "recodeSocketDefAuth", "recodeSocketJS", "creativeNBT"
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
