import { Player } from "alt";
import { Weapon } from "./character/weapon";
import { Gameserver } from "../../index";

export class FWPlayer {
    private _player: Player;
    private _kv: Map<string, any>;
    Weapons: Map<number, Weapon>;

    constructor(player:Player) {
        this._player = player;
        this.Weapons = new Map<number, Weapon>();
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