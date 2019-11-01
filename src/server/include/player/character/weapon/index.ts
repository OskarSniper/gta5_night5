import { IWeapon } from "./type";
import { Component } from "./component";

export class Weapon {
    private _weapon: IWeapon;
    private _ammo: number;
    private _components: Set<Component>;

    Id: number; // TODO: set internal weapon number, so cheat is not possible!
    Name: string;
    Hash: number;

    constructor(weapon:IWeapon, ammo:number) {
        this.Id = -1; // TODO: generate random weapon id for anti cheat :)
        this._weapon = weapon;
        this.Name = this._weapon.Name;
        this.Hash = this._weapon.Hash;

        this._ammo = ammo; // TODO: Client send shoot event to calc new server-side ammo.
        this._components = new Set();

        this.addComponent(new Component("Base Model", 0xF3462F33, "COMPONENT_KNUCKLE_VARMOD_BASE"));
    }

    setAmmo(amount:number):void {
        this._ammo = amount;
        // TODO: send client update!
        // TODO: Fire update event!
    }

    getAmmo():number {
        return this._ammo;
    }

    addComponent(weaponComp:Component):boolean {
        if(!this._components.has(weaponComp)) {
            return false;
        } else {
            // TODO: Send client update!
            this._components.add(weaponComp);
            return true;
        }
    }

    removeComponent(weaponComp:Component):boolean {
        if(this._components.has(weaponComp)) {
            // TODO: Send client update!
            this._components.delete(weaponComp);
            return true;
        } else {
            return false;
        }
    }
}