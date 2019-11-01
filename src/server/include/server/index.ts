import { Player, on, Entity } from "alt";
import { AltEventType, PlayerEvent } from "../network/events/types";
import { World } from "../world";
import { FWPlayer } from "../player";
import { Network } from "../network";
import { Utils } from "../utils";
import { FWVehicle } from "../vehicle";

import { Damage, Death, Disconnect, Connect } from "../network/events/packages/player/index";

export class Server {
    /**
     * Loading all necessary modules & init them!
     */
    Network: Network;
    Players: Map<number, FWPlayer>;
    Vehicles: Map<number, FWVehicle>;
    Utils: Utils;
    World: World;

    constructor() {
        console.log("Framework Server created!");
        this.Network = new Network();
        this.World = new World();
        this.Players = new Map<number, FWPlayer>();
        this.Vehicles = new Map<number, FWVehicle>();

        this.Utils = new Utils();

        /**
         * Events are from ALTV to framework interna.
         */
        on(AltEventType.Player_Connect, (player:Player) => {
            console.log("Player connected!");
            let p:FWPlayer = new FWPlayer(player);
            if(this.Players.has(player.id) && this.Utils.SocialClubToId.has(player.socialId)) {
                console.log("Error: User duplicate?!");
                return;
            }

            this.Players.set(player.id, p);
            this.Utils.SocialClubToId.set(player.socialId, player.id);

            this.Network.Event.emit(PlayerEvent.Connect, new Connect(player));
            this.Network.emit(player, "Framework::Sync", JSON.stringify(Array.from(this.Network.Protocol.Events())));
        });

        on(AltEventType.Player_Disconnect, (player:Player, reason:string) => {
            console.log("Player disconnected!");
            if(this.Players.has(player.id)) {
                this.Players.delete(player.id);
                this.Utils.SocialClubToId.delete(player.socialId);

                this.Network.Event.emit(PlayerEvent.Disconnect, new Disconnect(player, reason));
            } else {
                console.log("Error: Skip user disconnect!");
            }
        });

        on(AltEventType.Player_Death, (player:Player, killer:Entity, weapon:number) => {
            this.Network.Event.emit(PlayerEvent.Death, new Death(player, killer, weapon));
        });

        on(AltEventType.Player_Damage, (player:Player, attacker:Entity, damage:number, weapon:number) => {
            this.Network.Event.emit(PlayerEvent.Damage, new Damage(player, attacker, damage, weapon));
        });
    }
}