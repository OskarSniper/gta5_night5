import { Player, on } from "alt";
import { Event } from "../events";
import { AltEventType, PlayerEvent } from "../events/types";
import { World } from "../world";
import { FWPlayer } from "../player";
import { Connect } from "../events/packages/player/connect";

export class Server {
    /**
     * Loading all necessary modules & init them!
     */
    Event: Event;
    Players: Array<FWPlayer>;
    World: World;

    private _playerSCToArray: { [id:string]: number };

    constructor() {
        this.Event = new Event();
        this.World = new World();

        this.Players = [];
        this._playerSCToArray = {};

        // TODO: Fire event on player connect
        on(AltEventType.Player_Connect, (player:Player) => {
            let p:FWPlayer = new FWPlayer(player);
            this.Players.push(p);
            this._playerSCToArray[player.socialId] = this.Players.length - 1;
            this.Event.emit(PlayerEvent.Connect, new Connect(player, this.Players.length - 1));
        });

        on(AltEventType.Player_Disconnect, (player:Player, reason:string) => {
            console.log(this._playerSCToArray[player.socialId]);
        });
    }
}