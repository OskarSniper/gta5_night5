export class Protocol {
    private _scappedEvents: Map<string, string>;
    private _eventToPackage: Map<string, any>;
    private _countEvents: number;

    constructor() {
        this._scappedEvents = new Map<string, string>();
        this._eventToPackage = new Map<string, any>();
        this._countEvents = 0;
    }

    registerPackage(origin:string):boolean {
        if(!this._scappedEvents.has(origin)) {
            this._countEvents = this._countEvents + 1;
            this._scappedEvents.set(origin, this._generateId(this._countEvents));
            console.log(`${origin} successfully registered!`);
            return true;
        } else {
            console.log(`Conflict! ${origin} is already registered!`);
            return false;
        }
    }

    unregisterPackage(origin:string):boolean {
        if(this._scappedEvents.has(origin)) {
            this._scappedEvents.delete(origin);
            console.log(`Package ${origin} successfully unregistered!`);
            return true;
        } else {
            console.log(`Conflict! ${origin} not registered, no action taken!`);
            return false;
        }
    }

    private _generateId(input:number):string {
        let id:string = "";
        let alphabet:string = "0123456789abcdef";
        let alphabetLength:number = alphabet.length;
        do {
            id = alphabet[input % alphabetLength] + id;
            input = parseInt((input / alphabetLength).toString(), 10);
        } while (input);
        return id;
    }
}