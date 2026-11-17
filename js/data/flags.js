const FLAGS_PK = {
    "battleType": {
        "double": [],
        "trueDouble": {
            "Twins Amy & Mimi #1": {},
            "Twins Tori & Til": {},
            "Twins Jo & Zoe #1": {},
            "Twins Dara & Dia": {},
            "Twins Amy & Mimi #2": {},
            "Twins Jo & Zoe #2": {},
            "Twins Meg & Peg #1": {},
            "Twins Meg & Peg #2": {},
            "Twins Clea & Gil": {},
            "Twins Mickey": {},
            "Double Team Zac & Jen": {},
            "Young Couple Moe & Lulu": {},
            "Young Couple Vic & Tara": {},
            "Young Couple Tim & Sue #1": {},
            "Twins Kay & Tia #1": {},
            "Twins Day & Dani": {},
            "Twins Kay & Tia #2": {},
            "Twins Kay & Tia #3": {},
            "Twins Kay & Tia #4": {},
            "Young Couple Tim & Sue #2": {},
            "Young Couple Tim & Sue #3": {},
            "Young Couple Tim & Sue #4": {},
            "Double Team Elan & Ida": {},
            "Young Couple Duff & Eda": {},
            "Double Team Thom & Kae": {}
        },
        "tag": []
    },
    "hidden": [],
    "weather": {
        "": [],
        "clear": [],
        "sun": [],
        "rain": [],
        "sand": [],
        "hail": []
    }
};

function getTagBattle(trainerName) {
    for (var i in Object.values(FLAGS_PK.battleType.tag)) {
        var battle = Object.values(FLAGS_PK.battleType.tag)[i];
        if (battle.enemy1 == trainerName || battle.enemy2 == trainerName) return battle;
    }
    return undefined;
}

function getDoubleBattle(trainerName) {
    for (var i in Object.values(FLAGS_PK.battleType.double)) {
        var battle = Object.values(FLAGS_PK.battleType.double)[i];
        if (battle.enemy1 == trainerName || battle.enemy2 == trainerName) return battle;
    }
    return undefined;
}
