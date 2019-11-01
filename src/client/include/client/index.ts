import alt from "alt";
import { Network } from "../network";
import { Event } from "../network/event";

export class Client {
    Network: Network;
    Event: Event;

    constructor() {
        alt.log("Initialize client engine!");
        this.Network = new Network();
        this.Event = new Event();
    }
}