import { Player } from "alt";
import { Weapon } from "./character/weapons/weapon";
import { Sync } from "../sync";

export class FWPlayer {
    _player: Player;
    CustomSync: Sync;
    IpAddress: string;
    Weapons: Map<number, Weapon>;
    private _kv: Map<string, any>;

    constructor(player:Player) {
        this._player = player;
        this.IpAddress = this._player.ip;
        this.Weapons = new Map<number, Weapon>();
        this.CustomSync = new Sync();
        this._kv = new Map<string, any>();
    }

    getNativePlayer():Player {
        return this._player;
    }

    set(key:string, value:any):void {
        this._kv.set(key, value);
    }

    get(key:string):any {
        return this.get(key);
    }

    has(key:string):boolean {
        return this._kv.has(key);
    }
}