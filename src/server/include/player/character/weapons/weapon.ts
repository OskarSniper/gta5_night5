import { Meele, Handguns } from "./type";

export class Weapon {
    private _id: number; // TODO: set internal weapon number, so cheat is not possible!
    private _w: Meele | Handguns;
    constructor(weapon:Meele | Handguns) {
        this._id = 0; // TODO: generate random weapon id for anti cheat :)
        this._w = weapon;
    }
}