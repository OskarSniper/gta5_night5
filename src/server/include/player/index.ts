import { Player } from "alt";
import { Weapon } from "./character/weapon";
import { Gameserver } from "../../index";
import { Weapons } from "./character/weapons";

export class FWPlayer {
    private _player: Player;
    private _kv: Map<string, any>;
    Weapons: Weapons;

    constructor(player:Player) {
        this._player = player;
        this.Weapons = new Weapons(this._player);
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

    emit(ev:string, ...data:any):void {
        Gameserver.Network.emit(this._player, ev, data);
    }
}