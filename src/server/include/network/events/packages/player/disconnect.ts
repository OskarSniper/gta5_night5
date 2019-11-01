import { Package } from "./base";
import { Player } from "alt";

export class Disconnect extends Package {
    Reason: string;
    constructor(p:Player, reason:string) {
        super(p);
        this.Reason = reason;
    }
}