import { Player, on } from "alt";
import { Event } from "../events";
import { AltEventType, PlayerEvent } from "../events/types";
import { World } from "../world";
import { FWPlayer } from "../player";
import { Connect } from "../events/packages/player/connect";
import { Disconnect } from "../events/packages/player/disconnect";

export class Server {
    /**
     * Loading all necessary modules & init them!
     */
    Event: Event;
    Players: Map<string, FWPlayer>;
    World: World;

    constructor() {
        this.Event = new Event();
        this.World = new World();

        this.Players = new Map();

        // TODO: Fire event on player connect
        on(AltEventType.Player_Connect, (player:Player) => {
            let p:FWPlayer = new FWPlayer(player);
            if(this.Players.has(player.socialId)) {
                console.log("Error: User duplicate?!");
                return;
            }

            this.Players.set(player.socialId, p);
            this.Event.emit(PlayerEvent.Connect, new Connect(player));
        });

        on(AltEventType.Player_Disconnect, (player:Player, reason:string) => {
            if(this.Players.has(player.socialId)) {
                this.Players.delete(player.socialId);
                this.Event.emit(PlayerEvent.Disconnect, new Disconnect(player, reason));
            } else {
                console.log("Error: Skip user disconnect!");
            }
        });
    }
}