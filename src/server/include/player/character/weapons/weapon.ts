import { Meele, Handguns } from "./type";

export class Weapon {
    private _id: number; // TODO: set internal weapon number, so cheat is not possible!
    private _weapon: Meele | Handguns;
    private _ammo: number;
    constructor(weapon:Meele | Handguns, ammo:number) {
        this._id = 0; // TODO: generate random weapon id for anti cheat :)
        this._weapon = weapon;
        this._ammo = ammo; // TODO: Client send shoot event to calc new server-side ammo.
    }
}