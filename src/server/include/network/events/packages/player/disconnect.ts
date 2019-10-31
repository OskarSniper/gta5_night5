import { Package } from "../package";
import { Player } from "alt";

export class Disconnect extends Package {
    Reason: string;
    constructor(player:Player, reason:string) {
        super(player);
        this.Reason = reason;
    }
}