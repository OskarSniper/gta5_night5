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