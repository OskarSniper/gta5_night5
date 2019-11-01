import { Vehicle } from "alt";
import { Gameserver } from "../..";
import { ExtendedAltEvent } from "../network/events/types";
import { emit } from "alt";

export class FWVehicle {
    // TODO: Create vehicle handler :)
    private _veh: Vehicle;
    constructor(v:Vehicle) {
        this._veh = v;
        emit(ExtendedAltEvent.Vehicle_Create, this._veh, this);
    }

    getNativeVehicle():Vehicle {
        return this._veh;
    }
}