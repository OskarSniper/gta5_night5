import { Package } from "../package";
import { Entity, Player } from "alt";
import { Weapon } from "../../../../player/character/weapon";
import { Gameserver } from "../../../../../index";
import { FWPlayer } from "../../../../player";

export class Death extends Package {
    Killer: FWPlayer|Entity;
    Weapon: Weapon|number;
    constructor(p:Player, killer:Entity, weapon:number) {
        super(p);
        this.Killer = killer;
        this.Weapon = weapon;
        if(Gameserver.Players.has(killer.id)) {
            this.Killer = Gameserver.Players.get(killer.id) as FWPlayer;
            if(!this.Killer.Weapons.has(weapon)) {
                // TODO: Implement Anti-Cheat
                console.log("!ANTI-CHEAT! Player shouldnt have this weapon!");
            }
        } else {
            // TODO: Handle player death event for others than players
            console.log("Killer isnt a real player?");
        }
    }
}