import { WeatherType } from "./types";
import * as game from "alt";
import { Gameserver } from "../../..";
import { FWPlayer } from "../../player";

/**
 * Helperclass for our weather.
 * With this class we can change the weather in GTA
 * @class Weather
 * @author OskarSniper <Sebastian Waldbauer>
 * @version 1.0.0
 * @since 1.0.0
 */
export class Weather {
    private _weather: WeatherType;

    /**
     * @constructor
     */
    constructor() {
        this._weather = WeatherType.Extra_Sunny;
    }

    /**
     * Get the current weather in our world.
     * @returns {WeatherType} WeatherType
     */
    get():WeatherType {
        return this._weather;
    }

    /**
     * Sets the weather in our world.
     * @param {WeatherType} weatherType
     * @param {number} specificPlayer Default: -1 (all players). If > -1, the specific player will receive a weather update.
     * @returns {boolean}
     */
    set(type:WeatherType, specificPlayer:number = -1):void {
        this._weather = type;
        if(specificPlayer > -1) {
            (Gameserver.Players.get(specificPlayer) as FWPlayer).getNativePlayer().setWeather(type);
            return;
        }
        Gameserver.Players.forEach((p:FWPlayer) => {
            p.getNativePlayer().setWeather(type);
        });
    }
}