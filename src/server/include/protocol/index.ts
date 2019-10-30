export class Protocol {
    private _scappedEvents: Map<string, string>;
    private _countEvents: number;

    constructor() {
        this._scappedEvents = new Map<string, string>();
        this._countEvents = 0;
    }

    registerPackage(origin:string):void {
        if(!this._scappedEvents.has(origin)) {
            this._countEvents = this._countEvents + 1;
            this._scappedEvents.set(origin, this._generateId(this._countEvents));
        } else {
            console.log(`Conflict! ${origin} is already registered!`);
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