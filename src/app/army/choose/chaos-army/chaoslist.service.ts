import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ChaoslistdataService {
    constructor() { }

    leaderList = [
        {
            name: "Aspiring Champion",
            type: "Leader",
            des: "with one option, from each of the following",
            op1: "Plasma pistol or tainted bolt pistol",
            op2: "Power fist, power maul, power weapons or tainted chainweapon",
        },
        {
            name: "Chosen",
            type: "Leader",
            des: "with one option, from each of the following",
            op1: "Plasma pistol or deamon blade",
            op2: "Tainetd bolt pistol or deamon blade",
        },
        {
            name: "Eightbound Apostel",
            type: "Leader",
            des: "with one option, from each of the following",
            op1: "Plasma psitol and accured crozius",
            op2: "Tainted bolt pistol and accused crozius",
        }
    ];

    opList = [
        {
            name: "Butcher",
            type: "World Eaters",
            des: "with one of the following options",
            op1: "Double-handed chainaxe",
            op2: "Double-handed chainsword",
            op3: "",
        },
        {
            name: "Gunner",
            type: "World Eaters",
            des: "with one of the following options",
            op1: "Flammer / bolt pistol / fists",
            op2: "Meltgun / bolt pistol / fists",
            op3: "Plasma gun / bolt pistol / fists",
        },
        {
            name: "Icon bearer",
            type: "World Eaters",
            des: "with one of the following options",
            op1: "Bolt pistol and chainaxe",
            op2: "Bolt pistol and chainsword",
            op3: "",
        },
        {
            name: "Warrior",
            type: "World Eaters",
            des: "WARRIOR can take each operativ once",
            op1: "Bolt pistol and chainaxe",
            op2: "Bolt pistol and chainsword",
            op3: "",
        }
    ]

    supportList = [
        {
            name: "Berzerker-Surgeon",
            type: "Support",
            des: "equipted with a Narthecium and with one option from each following",
            op1: "Plamsma pistol or tainted bolt pistol",
            op2: "Power maul, power weapon or tainted chainweapon",
        },
        {
            name: "Bloodletter",
            type: "Support",
            des: "Only available for the EIGHTBOUND APOSTEL",
            op1: "Hellblade",
            op2: "",
        },
        {
            name: "Heavy gunner",
            type: "Support",
            des: "With one option from each following",
            op1: "Heavy bolter, bolt pistol and fists",
            op2: "Reaper chaincannon, bolt pistol and fists",
        },
        {
            name: "Terminator",
            type: "Support",
            des: "",
            op1: "Kombibolter and power fist",
            op2: "Kombibolter and heavy chainweapon",
        }
    ]

    archetypesList = [
        {
            arch1: "Securety",
            arch2: "Seek & Destroy",
        }
    ]
}