import { Server } from "./include/server";
import { PlayerEvent } from "./include/network/events/types";
import { Connect } from "./include/network/events/packages/player/connect";
import alt, { Player, Entity, Vehicle } from "alt";
import { PlayerPackage } from "./include/network/events/packages/player/playerPackage";
import { Death } from "./include/network/events/packages/player/death";
import { Weapon } from "./include/player/character/weapon";
import { FWPlayer } from "./include/player";
import { GameWeapons } from "./include/player/character/weapon/type";
import { FWVehicle } from "./include/vehicle";
const Gameserver:Server = new Server();
export {
    Gameserver
};


/**
 * Testarea
 */

Gameserver.Network.on(PlayerEvent.Connect, (x:Connect) => {
    if(x.Player instanceof FWPlayer) {
        console.log("New Player " + x.Player);
        x.Player.getNativePlayer().spawn(0, 0, 0, 0);
        x.Player.Weapons.give(new Weapon(GameWeapons.Handgun.Pistol, 100));
    }
});

class Testpackage extends PlayerPackage {
    Objekt: Object;
    Richtig: boolean;
    constructor(player:Player, obj:Object, bool:boolean) {
        super(player);
        this.Objekt = obj;
        this.Richtig = bool;
    }
}

Gameserver.Network.Protocol.registerPackage("Framework::Game::Test", Object(Testpackage));

for(let i:number = 0; i < 5; ++i) {
    Gameserver.Network.Protocol.registerPackage("Framework::Game::Test" + i, Object(Testpackage));
    Gameserver.Network.on("Framework::Game::Test" + i, (x:Testpackage) => {
        console.log("Testpackage called!" + i);
    });
}

Gameserver.Network.on(PlayerEvent.Death, (x:Death) => {
    let weapon:Weapon = x.Weapon as Weapon;
    weapon.setAmmo(weapon.getAmmo() + 100);
    if(x.Killer instanceof FWPlayer) {
        x.Killer.getNativePlayer().maxArmour = 100;
        x.Killer.getNativePlayer().maxHealth = 100;
        x.Killer.getNativePlayer().rot = -90;
    }
});

Gameserver.Network.on("consoleCommand", (player:Player, data:string) => {
    let p:any = JSON.parse(data);
    switch(p[0]) {
        case "veh":
            switch(p[1]) {
                case "count":
                    console.log(`Currently '${Gameserver.Vehicles.size}' cars!`);
                break;
                case "spawn":
                    let v:FWVehicle = new FWVehicle(new alt.Vehicle(p[2], player.pos.x + 5, player.pos.y, player.pos.z, 0, 0, 0));
                    v.getNativeVehicle().numberPlateText = "BOSS";
                break;
            }
        break;
    }
});