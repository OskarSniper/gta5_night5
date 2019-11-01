import { Weapon } from "./weapon";
import { Player } from "alt";

export class Weapons {
    private _p: Player;
    private _weapons: Map<number, Weapon>;
    constructor(p:Player) {
        this._p = p;
        this._weapons = new Map<number, Weapon>();
    }

    hasByHash(hash:number):boolean {
        return this._weapons.has(hash);
    }

    getByHash(hash:number):Weapon|undefined {
        if(this.hasByHash(hash)) {
            return this._weapons.get(hash) as Weapon;
        } else {
            return undefined;
        }
    }

    has(weapon:Weapon):boolean {
        return this._weapons.has(weapon.Hash);
    }

    get(weapon:Weapon):Weapon|undefined {
        if(this.has(weapon)) {
            return this._weapons.get(weapon.Hash) as Weapon;
        } else {
            return undefined;
        }
    }

    give(weapon:Weapon, equipNow:boolean = true):boolean {
        if(this.has(weapon)) {
            return false;
        } else {
            this._p.giveWeapon(weapon.Hash, 100, equipNow);
            return true;
        }
    }
}