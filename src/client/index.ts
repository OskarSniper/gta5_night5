import alt, { gameControlsEnabled } from "alt";
import * as native from 'natives';

export class Client {
    Network: Network;
    Event: Event;

    constructor() {
        alt.log("Initialize client engine!");
        this.Network = new Network();
        this.Event = new Event();
    }
}

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

export class Event {
    private _listener: any;
    constructor() {
        this._listener = [];
    }

    private _addListener(event:string, cb:any):void {
        this._listener[event] = this._listener[event] || [];
        this._listener[event].push(cb);
    }

    private _removeListener(event:string, cb:any):void {
        let l:any = this._listener[event];
        if(!l) {
            return;
        }

        for(let i:number = l.length; i > 0; --i) {
            if(l[i] === cb) {
                l.splice(i, 1);
                break;
            }
        }
    }

    emit(event:string, ...data:any):void {
        let l:any = this._listener[event];
        if(!l) {
            return;
        }

        l.forEach((li:any) => {
            li(...data);
        });
    }

    on(event:string, cb:any):void {
        this._addListener(event, cb);
    }
}

let c:Client = new Client();
alt.log(c);

/*
alt.setInterval(() => {
    alt.log("Sending test event!");
    alt.emitServer("5", [JSON.stringify([{"test": "test"}, true])] );
}, 1000);
*/

alt.emitServer("3", [JSON.stringify([{"test": "test"}, true])] );
alt.emitServer("3", [JSON.stringify([{"test": "test"}, true])] );

// TODO: Move to dev!
alt.on("consoleCommand", (...data:any) => {
    alt.emitServer("consoleCommand", [JSON.stringify(data)] );
});

// register graphics stuff
/**

let id = alt.everyTick(() => {
    game.removeLoadingPrompt();
	game.beginTextCommandBusyString('STRING');
	game.addTextComponentSubstringPlayerName(this.text);
	game.endTextCommandBusyString(this.type);
});

alt.clearEveryTick(id);
 */