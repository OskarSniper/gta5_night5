import { World } from "./include/world";
import { WeatherType } from "./include/world/weather/types";

export * from "./include/player";
export * from "./include/sync";
export * from "./include/world";

// TODO: Remove this useless code :)
var w:World = new World();
console.log(w.Weather.get());
console.log(w.Weather.set(WeatherType.Halloween));