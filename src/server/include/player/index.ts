import { Player } from "alt";
import { Gameserver } from "../../index";
import { Weapons } from "./character/weapons";
import { PlayerWeather } from "./weather";

export class FWPlayer {
    private _player: Player;
    private _kv: Map<IMetaKey, any>;
    Weapons: Weapons;
    Weather: PlayerWeather;

    constructor(player:Player) {
        this._player = player;
        this.Weapons = new Weapons(this._player);
        this.Weather = new PlayerWeather(this._player.id);
        this._kv = new Map<IMetaKey, any>();
    }

    getNativePlayer():Player {
        return this._player;
    }

    set(key:IMetaKey, value:any):void {
        // TODO: Rewrite meta sync!
        if(key.Synced) {
            this.emit("Framework::Player::Meta::Set", { "key": key.Key, "value": value.Value });
        }

        this._kv.set(key, value);
    }

    get(key:IMetaKey):any {
        return this.get(key);
    }

    has(key:IMetaKey):boolean {
        return this._kv.has(key);
    }

    emit(ev:string, ...data:any):void {
        Gameserver.Network.emit(this._player, ev, JSON.stringify(data));
    }
}

export interface IMetaKey {
    Key: string;
    Synced?: boolean;
}