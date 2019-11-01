import { GameWeapons, IWeapon } from "../player/character/weapon/type";

export class Utils {
    SocialClubToId: Map<string, number>;
    ValidWeapons: Array<number>;
    constructor() {
        this.SocialClubToId = new Map<string, number>();
        this.ValidWeapons = new Array<number>();

        this._getValidWeapons();
    }

    private _getValidWeapons():void {
        Object.values(GameWeapons).forEach((type, index) => {
            Object.values(type).forEach((w:any, index:any) => {
                if(this.ValidWeapons.indexOf(w.Hash) > -1) {
                    return;
                }

                this.ValidWeapons.push(w.Hash);
            });
        });
    }
}