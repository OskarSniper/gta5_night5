import { EventEmitter } from "events";

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
        this._em.emit(ev, ...data);
    }

    on(ev:string, cb:any):void {
        this._em.on(ev, cb);
    }
}