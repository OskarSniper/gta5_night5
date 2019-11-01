import { Package } from "../package";
import { Entity, Player } from "alt";
import { FWPlayer } from "../../../../player";
import { Gameserver } from "../../../../..";
import { Weapon } from "../../../../player/character/weapon";

export class Damage extends Package {
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
            if(!this.Attacker.Weapons.has(weapon)) {
                // TODO: Implement Anti-Cheat
                console.log("!ANTI-CHEAT! Player shouldnt have this weapon!");
            }

            this.Weapon = this.Attacker.Weapons.get(weapon) as Weapon;
        }
    }
}