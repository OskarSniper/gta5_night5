import { Meele, Handguns } from "./type";
import { WeaponComponent } from "./weaponComponent";

export class Weapon {
    private _id: number; // TODO: set internal weapon number, so cheat is not possible!
    private _weapon: Meele | Handguns;
    private _ammo: number;
    private _components: Set<WeaponComponent>;

    constructor(weapon:Meele | Handguns, ammo:number) {
        this._id = -1; // TODO: generate random weapon id for anti cheat :)
        this._weapon = weapon;
        this._ammo = ammo; // TODO: Client send shoot event to calc new server-side ammo.
        this._components = new Set();

        this.addComponent(new WeaponComponent("Base Model", 0xF3462F33, "COMPONENT_KNUCKLE_VARMOD_BASE"));
    }

    setAmmo(amount:number):void {
        this._ammo = amount;
        // TODO: send client update!
        // TODO: Fire update event!
    }

    addComponent(weaponComp:WeaponComponent):boolean {
        if(!this._components.has(weaponComp)) {
            return false;
        } else {
            // TODO: Send client update!
            this._components.add(weaponComp);
            return true;
        }
    }

    removeComponent(weaponComp:WeaponComponent):boolean {
        if(this._components.has(weaponComp)) {
            // TODO: Send client update!
            this._components.delete(weaponComp);
            return true;
        } else {
            return false;
        }
    }
}