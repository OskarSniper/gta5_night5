import { EventEmitter } from "events";
import { EventType } from "./types";

export class Event {
    _em: EventEmitter;
    constructor() {
        this._em = new EventEmitter();
    }

    emit(ev:EventType, ...data: any):void {
        // TODO: Add log & maybe some stats about each event!
        // TODO: scrap down events from "MyEvent" to "a" to minimize network traffic!
        this.emit(ev, data);
    }
}