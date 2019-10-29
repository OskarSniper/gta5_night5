import { Player, on } from "alt";
import { Event } from "../events";
import { AltEventType, EventType } from "../events/types";
import { World } from "../world";

export class Server {
    /**
     * Loading all necessary modules & init them!
     */
    Event: Event;
    World: World;
    constructor() {
        this.Event = new Event();
        this.World = new World();
        // TODO: Fire event on player connect
        //on(AltEventType.Player_Connect, this.Event.emit(EventType.Player_Connect, new FWPlayer(player:Player)));
    }
}