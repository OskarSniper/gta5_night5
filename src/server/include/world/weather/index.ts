import { WeatherType } from "./types";

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
     * @returns {boolean}
     */
    set(type:WeatherType):boolean {
        // TODO: Set weather & sync!
        this._weather = type;
        return true;
    }
}