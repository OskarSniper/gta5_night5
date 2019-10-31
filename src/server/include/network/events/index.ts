import { EventEmitter } from "events";
import { PlayerEvent } from "./types";

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

    emit(ev:string, ...data:any):void {
        console.log(ev + " called with data ");
        console.log(data);
        this._em.emit(ev, ...data);
    }

    on(ev:string, cb:any):void {
        console.log("Firing new event!" + ev);
        this._em.on(ev, cb);
    }
}