import { Server } from "./include/server";
import { PlayerEvent } from "./include/network/events/types";
import { Connect } from "./include/network/events/packages/player/connect";
import alt, { Player, Entity } from "alt";
import { Package } from "./include/network/events/packages/player/base";
import { Death } from "./include/network/events/packages/player/death";
import { Weapon } from "./include/player/character/weapon";
import { FWPlayer } from "./include/player";
import { GameWeapons } from "./include/player/character/weapon/type";
const Gameserver:Server = new Server();
export {
    Gameserver
};


/**
 * Testarea
 */
Gameserver.Network.Event.on(PlayerEvent.Connect, (x:Connect) => {
    if(x.Player instanceof FWPlayer) {
        console.log("New Player " + x.Player);
        x.Player.getNativePlayer().spawn(0, 0, 0, 0);
        x.Player.Weapons.give(new Weapon(GameWeapons.Handgun.Pistol, 100));
    }
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

Gameserver.Network.Event.on(PlayerEvent.Death, (x:Death) => {
    let weapon:Weapon = x.Weapon as Weapon;
    weapon.setAmmo(weapon.getAmmo() + 100);
    if(x.Killer instanceof FWPlayer) {
        x.Killer.getNativePlayer().maxArmour = 100;
        x.Killer.getNativePlayer().maxHealth = 100;
        x.Killer.getNativePlayer().rot = -90;
    }
});