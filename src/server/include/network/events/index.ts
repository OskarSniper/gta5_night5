import { EventEmitter } from "events";
import { Gameserver } from "../../..";

/**
 * Packages will be resolved as event
 * 
 * NOTE: For server-side coding we only need this event class!
 */
export class Event {
    private _em: EventEmitter;

    constructor() {
        this._em = new EventEmitter();
    }

    getEventEmitter():EventEmitter {
        return this._em;
    }

    // TODO: Count sent bytes!
    // TODO: All internal packages are marked as unoptimized, WIP
    emit(ev:string, ...data:any):void {
        if(Gameserver.Network.Protocol.Events().has(ev)) {
            console.log("New incoming package -> " + ev);
            this._em.emit(ev, ...data);
        } else {
            console.log(`UnOptimized package '${ev}' detected!`);
            this._em.emit(ev, ...data);
        }
    }
}