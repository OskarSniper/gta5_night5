import { PlayerPackage } from "./playerPackage";
import { Entity, Player } from "alt";
import { FWPlayer } from "../../../../player";
import { Gameserver } from "../../../../..";
import { Weapon } from "../../../../player/character/weapon";

export class Damage extends PlayerPackage {
    Attacker: FWPlayer|Entity;
    Damage: number;
    Weapon: Weapon|number;
    constructor(p:Player, attacker:Entity, damage:number, weapon:number) {
        super(p);
        this.Attacker = attacker;
        this.Damage = damage;
        this.Weapon = weapon;
        if(Gameserver.Players.has(attacker.id)) {
            this.Attacker = Gameserver.Players.get(attacker.id) as FWPlayer;

            // Anti-cheat implementation with weapon validation!
            if(!this.Attacker.Weapons.hasByHash(weapon) && (Gameserver.Utils.ValidWeapons.indexOf(weapon) > -1)) {
                // TODO: Implement Anti-Cheat
                console.log("!ANTI-CHEAT! Player shouldnt have this weapon!");
            }

            this.Weapon = this.Attacker.Weapons.getByHash(weapon) as Weapon;
        }
    }
}