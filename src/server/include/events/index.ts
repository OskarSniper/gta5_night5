import { EventEmitter } from "events";
import { PlayerEvent } from "./types";

export class Event {
    private _em: EventEmitter;

    constructor() {
        this._em = new EventEmitter();
    }

    getEventEmitter():EventEmitter {
        return this._em;
    }

    emit(ev: PlayerEvent, ...data: any):void {
        // TODO: Add log & maybe some stats about each event!
        // TODO: scrap down events from "MyEvent" to "a" to minimize network traffic!
        this.emit(ev, data);
    }
}