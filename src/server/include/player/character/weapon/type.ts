export interface IWeapons {
    Meele: IMeele;
    Handgun: IHandguns;
}

export interface IWeapon {
    Name: string;
    Id: string;
    Hash: number;
}

/**
 * Weapon types
 */
export interface IMeele {
    Antique_Cavalry_Dagger: IWeapon;
}

export interface IHandguns {
    Pistol: IWeapon;
    Pistol_50: IWeapon;
}

export const GameWeapons:IWeapons = {
    Meele: {
        Antique_Cavalry_Dagger: {
            Name: "Antique Cavalry Dagger",
            Id: "weapon_dagger",
            Hash: 2460120199
        }
    },
    Handgun: {
        Pistol: {
            Name: "Pistol",
            Id: "weapon_pistol",
            Hash: 453432689
        },
        Pistol_50: {
            Name: "Pistol .50",
            Id: "weapon_pistol50",
            Hash: 2578377531
        }
    }
};

/*
export enum Meele {
    Antique_Cavalry_Dagger = 2460120199,
    Baseball_Bat = 2508868239,
    Broken_Bottle = 4192643659,
    Crowbar = 2227010557,
    Fist = 2725352035,
    Flashlight = 2343591895,
    Golf_Club = 1141786504,
    Hammer = 1317494643,
    Hatchet = 4191993645,
    Brass_Knuckles = 3638508604,
    Knife = 2578778090,
    Machete = 3713923289,
    Switchblade = 3756226112,
    Nightstick = 3756226112,
    Pipe_Wrench = 419712736,
    Battle_Axe = 3441901897,
    Pool_Cue = 2484171525,
    Stone_Hatchet = 940833800
}
*/

export enum Handguns {
    Pistol = 453432689
}