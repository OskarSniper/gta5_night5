import { Player } from "alt";
import { Package } from "../package";

export class Connect extends Package {
    Index: number;
    constructor(player:Player, index:number) {
        super(player);
        this.Index = index;
    }
}