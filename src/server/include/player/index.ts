import { Player } from "alt";
import { Weapon } from "./character/weapons/weapon";

export class FWPlayer {
    _player: Player;
    IpAddress: string;
    Weapons: Map<number, Weapon>;

    constructor(player:Player) {
        this._player = player;
        this.IpAddress = this._player.ip;
        this.Weapons = new Map<number, Weapon>();

        //this.Weapons.push(new Weapon(Meele.Machete));
    }

    getNativePlayer():Player {
        return this._player;
    }
}