import { Protocol } from "./protocol";
import { Event } from "./events";
import alt, { Player } from "alt";
import { EventEmitter } from "events";

export class Network {
    Protocol: Protocol;
    Event: Event;
    private _em: EventEmitter;

    constructor() {
        this.Event = new Event();
        this.Protocol = new Protocol();
        this._em = new EventEmitter();
    }

    _getProtocolEmitter():EventEmitter {
        return this._em;
    }

    emit(player:Player|null, ev:string, ...data:any):void {
        let event:string = ev;

        // added fallback support to native packaging
        if(this.Protocol.Events().has(ev)) {
            event = this.Protocol.Events().get(ev) as string;
        } else {
            console.log("Using native packaging... Not recommended!");
        }

        alt.emitClient(player, event, data);
    }

    on(event:string, cb:any):void {
        this.Event.getEventEmitter().on(event, cb);
    }

    /*
    on(ev:string, cb:any):void {
        let event:string = ev;
        let pack:any = {};

        // added fallback support to native packaging
        if(this.Protocol.Events().has(ev)) {
            event = this.Protocol.Events().get(ev) as string;
            if(this.Protocol.Packages().has(event)) {
                pack = this.Protocol.Packages().get(event);
            }
        } else {
            console.log("Using native packaging... Not recommended!");
        }

        console.log(pack);
    }
    */
}