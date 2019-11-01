import { PlayerPackage } from "./playerPackage";
import { Entity, Player } from "alt";
import { Weapon } from "../../../../player/character/weapon";
import { Gameserver } from "../../../../../index";
import { FWPlayer } from "../../../../player";
import { GameWeapons } from "../../../../player/character/weapon/type";

export class Death extends PlayerPackage {
    Killer: FWPlayer|Entity;
    Weapon: Weapon|number;
    constructor(p:Player, killer:Entity, weapon:number) {
        super(p);
        this.Killer = killer;
        this.Weapon = weapon;
        if(Gameserver.Players.has(killer.id)) {
            this.Killer = Gameserver.Players.get(killer.id) as FWPlayer;

            // Anti-cheat implementation with weapon validation!
            if(!this.Killer.Weapons.hasByHash(weapon) && (Gameserver.Utils.ValidWeapons.indexOf(weapon) > -1)) {
                // TODO: Implement Anti-Cheat
                console.log("!ANTI-CHEAT! Player shouldnt have this weapon!");
            }
        } else {
            // TODO: Handle player death event for others than players
            console.log("Killer isnt a real player?");
        }
    }
}