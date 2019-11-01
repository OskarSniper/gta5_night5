import { PlayerPackage } from "./playerPackage";
import { Player } from "alt";

export class Disconnect extends PlayerPackage {
    Reason: string;
    constructor(p:Player, reason:string) {
        super(p);
        this.Reason = reason;
    }
}