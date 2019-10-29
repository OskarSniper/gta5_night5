import { World } from "./include/world";
import { WeatherType } from "./include/world/weather/types";
import { Server } from "./include/server";

export * from "./include/player";
export * from "./include/sync";
export * from "./include/world";

const Gameserver:Server = new Server();
export {
    Gameserver
};

console.log(Gameserver.World.Weather.get());
console.log(Gameserver.World.Weather.set(WeatherType.Halloween));