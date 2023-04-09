export type Block = {
    name : string;
    id : Boolean;
    arguments: String;
}

export type BracketBlock = {
    contents : Array<Block>;
    type : string;
}