export class Component {
    Name: string;
    Hash: number;
    HashKey: string;

    constructor(name:string, hash:number, hashkey:string) {
        this.Name = name;
        this.Hash = hash;
        this.HashKey = hashkey;
    }
}