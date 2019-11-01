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