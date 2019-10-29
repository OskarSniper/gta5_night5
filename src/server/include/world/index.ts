import { Weather } from "./weather";

export class World {
    Weather: Weather;
    constructor() {
        this.Weather = new Weather();
    }
}