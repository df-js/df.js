import {Block, BracketBlock} from "./basicTypes"
import { playerEvent, entityEvent, customEvent } from "./events";

export type Template = {
    author : string;
    name : string;
    version : number;
    block : string;
    event: playerEvent|entityEvent|customEvent;
    code : Array<Block|BracketBlock>;
}


/**
 * Creates a template used for making DiamondFire blocks.
 * 
 * @param {string} author - This can be your minecraft username, or something else.
 * @param {string} name - This is the name of the template.
 * @param {string} blockId - This will be the display block, to use as the template, for example "minecraft:oak_planks" 
 * @param {number} version - The version needed, optional
 * @param {playerEvent|entityEvent|customEvent} event - This is the event that will be placed down
 * @param {Block|BracketBlock} code - The code inside the template
 */
export function createTemplate(author : string, name : string, event: playerEvent|entityEvent|customEvent, blockId? : string, version? : number, ): Template {
    if (blockId == undefined) {
        blockId = "minecraft:ender_chest"
    }
    if (version == undefined) {
        version = 1
    }
    return {
        author: author,
        name: name,
        version: version,
        block: blockId,
        event: event,
        code: []
        

    };
}