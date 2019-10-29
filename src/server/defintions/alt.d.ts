
// THIS FILE IS AUTOGENERATED
// Generated on "10/4/2019, 4:43:35 PM"

declare module "alt" {
  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;

    constructor(x: number, y: number, z: number);
  }

  export class Entity extends WorldObject {
    readonly id: number;
    model: number|number|string;
    rot: Object;

    getByID(id: number): Entity|null;
    getSyncedMeta(key: string): any;
    setSyncedMeta(key: string, p1: any): void;
  }

  export class WorldObject extends BaseObject {
    dimension: number;
    pos: any|Object;

  }

  export class BaseObject {
    readonly type: number;
    readonly valid: boolean;

    destroy(): void;
    getMeta(key: string): any;
    setMeta(key: string, value: any): void;
  }

  export class Player extends Entity {
    static readonly all: Array<any>;
    armour: number|number;
    readonly authToken: string;
    currentWeapon: number|number;
    readonly currentWeaponComponents: Array<any>;
    readonly currentWeaponTintIndex: number;
    readonly entityAimOffset: any;
    readonly entityAimingAt: Entity|null;
    readonly flashlightActive: boolean;
    health: number|number;
    readonly hwidExHash: string;
    readonly hwidHash: string;
    readonly ip: string;
    maxArmour: number|number;
    maxHealth: number|number;
    readonly name: string;
    readonly ping: number;
    readonly seat: number;
    readonly socialId: string;
    readonly vehicle: Vehicle|null;

    addWeaponComponent(weaponHash: number, component: number): void;
    giveWeapon(weaponHash: number, ammo: number, equipNow: boolean): void;
    kick(): void;
    removeAllWeapons(): void;
    removeWeapon(weaponHash: number): void;
    removeWeaponComponent(weaponHash: number, component: number): void;
    setDateTime(day: number, month: number, year: number, hour: number, minute: number, second: number): void;
    setWeaponTintIndex(weaponHash: number, tintIndex: number): void;
    setWeather(weather: number): void;
    spawn(x: number, y: number, z: number, delay: number): void;
  }

  export class Vehicle extends Entity {
    activeRadioStation: number;
    static readonly all: Array<any>;
    bodyAdditionalHealth: number;
    bodyHealth: number;
    customPrimaryColor: Object;
    customSecondaryColor: Object;
    customTires: boolean;
    darkness: number;
    dashboardColor: number;
    readonly daylightOn: boolean;
    dirtLevel: number;
    readonly driver: Player|null;
    engineHealth: number;
    engineOn: boolean;
    readonly flamethrowerActive: boolean;
    readonly handbrakeActive: boolean;
    readonly hasArmoredWindows: number;
    headlightColor: number;
    interiorColor: number;
    lightsMultiplier: number;
    livery: number;
    lockState: number;
    manualEngineControl: boolean;
    modKit: number;
    readonly modKitsCount: number;
    neon: Object;
    neonColor: Object;
    readonly nightlightOn: boolean;
    numberPlateIndex: number;
    numberPlateText: string;
    pearlColor: number;
    petrolTankHealth: number;
    primaryColor: number;
    readonly repairsCount: number;
    roofLivery: number;
    roofOpened: boolean;
    secondaryColor: number;
    sirenActive: boolean;
    tireSmokeColor: Object;
    wheelColor: number;
    readonly wheelsCount: number;
    windowTint: number;

    constructor(p0: string);
    constructor(model: string, x: number, y: number, z: number, rx: number, ry: number, rz: number);
    doesWheelHasTire(wheelId: number): number;
    getAppearanceDataBase64(): string;
    getArmoredWindowHealth(windowId: number): number;
    getArmoredWindowShootCount(windowId: number): number;
    getBumperDamageLevel(part: number): number;
    getDamageStatusBase64(): string;
    getDoorState(doorId: number): number;
    getExtra(category: number): boolean;
    getGamestateDataBase64(): string;
    getHealthDataBase64(): string;
    getMod(category: number): number;
    getModsCount(category: number): number;
    getPartBulletHoles(part: number): number;
    getPartDamageLevel(part: number): number;
    getScriptDataBase64(): string;
    getWheelHealth(wheelId: number): number;
    isLightDamaged(lightId: number): boolean;
    isSpecialLightDamaged(specialLightId: number): boolean;
    isWheelBurst(wheelId: number): number;
    isWindowDamaged(windowId: number): boolean;
    isWindowOpened(windowId: number): boolean;
    setAppearanceDataBase64(appearanceData: string): void;
    setArmoredWindowHealth(p0: number, p1: number): void;
    setArmoredWindowShootCount(p0: number, p1: number): void;
    setBumperDamageLevel(p0: number, p1: number): void;
    setDamageStatusBase64(damageStatus: string): void;
    setDoorState(p0: number, p1: number): void;
    setExtra(category: number, state: boolean): void;
    setGamestateDataBase64(gamestateData: string): void;
    setHealthDataBase64(healthData: string): void;
    setLightDamaged(p0: number, p1: boolean): void;
    setMod(category: number, id: number): void;
    setPartBulletHoles(p0: number, p1: number): void;
    setPartDamageLevel(p0: number, p1: number): void;
    setScriptDataBase64(scriptData: string): void;
    setSpecialLightDamaged(p0: number, p1: boolean): void;
    setWheelBurst(p0: number, p1: boolean): void;
    setWheelHasTire(p0: number, p1: boolean): void;
    setWheelHealth(wheelId: number, health: number): void;
    setWheels(p0: number, p1: number): void;
    setWindowDamaged(p0: number, p1: boolean): void;
    setWindowOpened(p0: number, p1: boolean): void;
  }

  export class Blip extends WorldObject {

  }

  export class PointBlip extends Blip {

    constructor(type: number, x: number, y: number, z: number);
  }

  export class Checkpoint extends WorldObject {

    constructor(type: number, x: number, y: number, z: number, radius: number, height: number, r: number, g: number, b: number, a: number);
  }

  export class VoiceChannel extends BaseObject {

    constructor(isSpatial: boolean, maxDistance: number);
    addPlayer(targetEntity: Object): void;
    isPlayerInChannel(targetEntity: Object): boolean;
    isPlayerMuted(targetEntity: Object): boolean;
    mutePlayer(targetEntity: Object): void;
    removePlayer(targetEntity: Object): void;
    unmutePlayer(targetEntity: Object): void;
  }

  export class Colshape extends WorldObject {
    readonly colshapeType: number;

    isEntityIn(targetEntity: Object): boolean;
  }

  export class ColshapeCylinder extends Colshape {

    constructor(x: number, y: number, z: number, radius: number, height: number);
  }

  export class ColshapeSphere extends Colshape {

    constructor(x: number, y: number, z: number, radius: number);
  }

  export class ColshapeCircle extends Colshape {

    constructor(x: number, y: number, radius: number);
  }

  export class ColshapeCuboid extends Colshape {

    constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
  }

  export class ColshapeRectangle extends Colshape {

    constructor(x1: number, y1: number, x2: number, y2: number);
  }


  export function createBlipForCoords(type: number, x: number, y: number, z: number): Object|null;
  export function createCheckpoint(type: number, x: number, y: number, z: number, radius: number, height: number, r: number, g: number, b: number, a: number): Object|null;
  export function createVehicle(model: string|number|number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number): Vehicle;
  export function createVoiceChannel(isSpatial: boolean, maxDistance: number): Object|null;
  export function emit(evName: string, ...args: any[]): void;
  export function emitClient(v8Player: Object|null, evName: string, ...args: any[]): void;
  export function getNetTime(): number;
  export function getPlayersByName(name: string): Array<any>;
  export function getResourceExports(name: string): any;
  export function getResourceMain(name: string): string;
  export function getResourcePath(name: string): string;
  export function hasResource(name: string): boolean;
  export function hash(str: string): number;
  export function log(...str: string[]): void;
  export function logError(...str: string[]): void;
  export function logWarning(...str: string[]): void;
  export function off(evName: string, p1Fn: Function): void;
  export function offClient(evName: string, p1Fn: Function): void;
  export function on(evName: string, p1Fn: Function): void;
  export function onClient(evName: string, p1Fn: Function): void;
  export function removeEntity(_this: Object): void;
  export function removeVoiceChannel(_this: Object): void;
  export function resourceLoaded(name: string, p1: any): void;
  export function restartResource(name: string): void;
  export function startResource(name: string): void;
  export function stopResource(name: string): void;
}