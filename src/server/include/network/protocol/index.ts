/**
 * Protocol class for a smoother networking & fix all related
 * network issues. Built for high performance networks & clustering.
 * @author OskarSniper <Sebastian Waldbauer>
 * @version 1.0.0
 * @since 1.0.0
 */
export class Protocol {
    /**
     * scappedEvents contains the original package name and the shorten one.
     * This has been made to reduce network traffic & save bandwith.
     */
    private _scappedEvents: Map<string, string>;

    /**
     * Is used for Network2Package, so we can directly initialize a new incoming package
     * and call them natively.
     */
    private _eventToPackage: Map<string, any>;

    /**
     * Counts upwards to guarantee no duplicates in network identifiers.
     */
    private _countEvents: number;

    /**
     * Initialize all variables
     * @constructor
     */
    constructor() {
        this._scappedEvents = new Map<string, string>();
        this._eventToPackage = new Map<string, any>();
        this._countEvents = 0;
    }

    Events():Map<string, string> {
        return this._scappedEvents;
    }

    Packages():Map<string, any> {
        return this._eventToPackage;
    }

    /**
     * Registers a new network package to the whole system. This is used to detect & maybe
     * optimize bottlenecks in further network related stuff.
     * @param {string} origin
     * @param {any} pack
     * @returns {boolean}
     */
    registerPackage(origin:string, pack:any):boolean {
        if(!this._scappedEvents.has(origin)) {
            this._countEvents = this._countEvents + 1;
            let id:string = this._computeNewNetworkId(this._countEvents);
            this._scappedEvents.set(origin, id);
            this._eventToPackage.set(id, pack);
            console.log(`${origin} successfully registered!`);
            return true;
        } else {
            console.log(`Conflict! ${origin} is already registered!`);
            return false;
        }
    }

    /**
     * Used for removing network packages, maybe save some RAM, but not recommended
     * that often.
     * @param {string} origin
     * @returns {boolean}
     */
    unregisterPackage(origin:string):boolean {
        if(this._scappedEvents.has(origin)) {
            if(this._eventToPackage.has(this._scappedEvents.get(origin) as string)) {
                this._eventToPackage.delete(this._scappedEvents.get(origin) as string);
            }
            this._scappedEvents.delete(origin);
            console.log(`Package ${origin} successfully unregistered!`);
            return true;
        } else {
            console.log(`Conflict! ${origin} not registered, no action taken!`);
            return false;
        }
    }

    /**
     * Computing a new network identifier for network packages.
     * @param {number} c
     * @returns {string}
     */
    private _computeNewNetworkId(c:number):string {
        let id:string = "";
        let alphabet:string = "0123456789abcdefghijklmnopqrstuvwxyz";
        let alphabetLength:number = alphabet.length;
        do {
            id = alphabet[c % alphabetLength] + id;
            c = parseInt((c / alphabetLength).toString(), 10);
        } while (c);
        return id;
    }
}