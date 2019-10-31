import { Player, on } from "alt";
import { AltEventType, PlayerEvent } from "../network/events/types";
import { World } from "../world";
import { FWPlayer } from "../player";
import { Connect } from "../network/events/packages/player/connect";
import { Disconnect } from "../network/events/packages/player/disconnect";
import { Network } from "../network";

export class Server {
    /**
     * Loading all necessary modules & init them!
     */
    Network: Network;
    Players: Map<string, FWPlayer>;
    World: World;

    constructor() {
        console.log("Framework Server created!");
        this.Network = new Network();
        this.World = new World();
        this.Players = new Map<string, FWPlayer>();

        // TODO: Fire event on player connect
        on(AltEventType.Player_Connect, (player:Player) => {
            console.log("Player connected!");
            let p:FWPlayer = new FWPlayer(player);
            if(this.Players.has(player.socialId)) {
                console.log("Error: User duplicate?!");
                return;
            }

            this.Players.set(player.socialId, p);

            this.Network.Event.emit(PlayerEvent.Connect, new Connect(player));
            this.Network.emit(player, "Framework::Sync", JSON.stringify(Array.from(this.Network.Protocol.Events())));
        });

        on(AltEventType.Player_Disconnect, (player:Player, reason:string) => {
            console.log("Player disconnected!");
            if(this.Players.has(player.socialId)) {
                this.Players.delete(player.socialId);

                this.Network.Event.emit(PlayerEvent.Disconnect, new Disconnect(player, reason));
            } else {
                console.log("Error: Skip user disconnect!");
            }
        });
    }
}