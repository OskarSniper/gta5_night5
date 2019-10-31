import { Protocol } from "./protocol";
import { Event } from "./events";
import { Player, emitClient } from "alt";

export class Network {
    Protocol: Protocol;
    Event: Event;
    constructor() {
        this.Event = new Event();
        this.Protocol = new Protocol();
    }

    emit(player:Player|null, ev:string, ...data:any):void {
        let event:string = ev;

        // added fallback support to native packaging
        if(this.Protocol.Events().has(ev)) {
            event = this.Protocol.Events().get(ev) as string;
        }
        emitClient(player, event, data);
    }

    on(ev:string, cb:any):void {
        console.log("New protocol message received!" + ev);
        let event:string = ev;
        let pack:any = {};

        // added fallback support to native packaging
        if(this.Protocol.Events().has(ev)) {
            event = this.Protocol.Events().get(ev) as string;
            if(this.Protocol.Packages().has(event)) {
                pack = this.Protocol.Packages().get(event);
            }
        }

        console.log(pack);
    }
}