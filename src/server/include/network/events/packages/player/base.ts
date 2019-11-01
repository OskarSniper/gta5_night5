import { Player } from "alt";
import { FWPlayer } from "../../../../player";
import { Gameserver } from "../../../../..";

export class Package {
    Player: FWPlayer|Player;
    constructor(player:Player) {
        if(Gameserver.Players.has(player.id)) {
            this.Player = Gameserver.Players.get(player.id) as FWPlayer;
        } else {
            this.Player = player;
            console.log("Player not found? Kick?");
        }
    }
}