import { Server } from "./include/server";
import { PlayerEvent } from "./include/network/events/types";
import { Connect } from "./include/network/events/packages/player/connect";
import alt, { Player } from "alt";
import { Package } from "./include/network/events/packages/package";
const Gameserver:Server = new Server();
export {
    Gameserver
};


/**
 * Testarea
 */
Gameserver.Network.Event.on(PlayerEvent.Connect, (x:Connect) => {
    console.log("New Player " + x.Player.name);
    x.Player.spawn(0, 0, 0, 0);
    x.Player.model = "mp_f_freemode_01";
});

class Testpackage extends Package {
    Objekt: Object;
    Richtig: boolean;
    constructor(player:Player, obj:Object, bool:boolean) {
        super(player);
        this.Objekt = obj;
        this.Richtig = bool;
    }
}

Gameserver.Network.Protocol.registerPackage("Framework::Game::Test", Object(Testpackage));

for(let i:number = 0; i < 100; ++i) {
    Gameserver.Network.Protocol.registerPackage("Framework::Game::Test" + i, Object(Testpackage));
    Gameserver.Network.Event.on("Framework::Game::Test" + i, (x:Testpackage) => {
        console.log(x.Objekt);
        console.log(x.Player);
        console.log(x.Richtig);
    });
}