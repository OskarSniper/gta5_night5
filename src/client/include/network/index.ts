import alt from "alt";
import { c } from "../../index";

export class Network {
    private _syncTree: Map<string, string>;
    constructor() {
        alt.log("Initialize Networking engine!");
        this._syncTree = new Map<string, string>();

        alt.onServer("Framework::SyncTree", (syncTree:string) => {
            let d:Array<string> = JSON.parse(syncTree);
            for(let i:number = 0; i < d.length; ++i) {
                this._addToSyncTree(d[i][0], d[i][1]);
                alt.onServer(d[i][1], (...data:any) => c.Event.emit(d[i][0], data));
            }
        });
    }

    _addToSyncTree(origin:string, short:string):void {
        if(!this._syncTree.has(origin)) {
            this._syncTree.set(origin, short);
        }
    }

    __removeFromSyncTree(origin:string):void {
        if(this._syncTree.has(origin)) {
            this._syncTree.delete(origin);
        }
    }
}