import { Gameserver } from "../../index";
import { WeatherType } from "../world/weather/types";

export class PlayerWeather {
    private _playerId: number;
    constructor(pId:number) {
        this._playerId = pId;
    }

    get():WeatherType {
        return Gameserver.World.Weather.get(this._playerId) as WeatherType;
    }

    set(weather:WeatherType):void {
        Gameserver.World.Weather.set(weather, this._playerId);
    }
}