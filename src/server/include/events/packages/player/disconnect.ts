import { Package } from "../package";
import { Player } from "alt";

export class Disconnect extends Package {
    Reason: string;
    Index: number;
    constructor(player:Player, reason:string, index:number) {
        super(player);
        this.Reason = reason;
        this.Index = index;
    }
}