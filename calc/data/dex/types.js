"use strict";
exports.__esModule = true;

exports.HACK_CHART = {
    '???': { Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 1, Steel: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Fairy: 1 },
    Normal: { '???': 1, Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 0.5, Bug: 1, Ghost: 0, Steel: 0.5, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Fairy: 1 },
    Fighting: { '???': 1, Normal: 2, Fighting: 1, Flying: 0.5, Poison: 0.5, Ground: 1, Rock: 2, Bug: 0.5, Ghost: 0, Steel: 2, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 0.5, Ice: 2, Dragon: 1, Dark: 2, Fairy: 0.5 },
    Flying: { '???': 1, Normal: 1, Fighting: 2, Flying: 1, Poison: 1, Ground: 1, Rock: 0.5, Bug: 2, Ghost: 1, Steel: 0.5, Fire: 1, Water: 1, Grass: 2, Electric: 0.5, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Fairy: 1 },
    Poison: { '???': 1, Normal: 1, Fighting: 1, Flying: 1, Poison: 0.5, Ground: 0.5, Rock: 0.5, Bug: 1, Ghost: 0.5, Steel: 0, Fire: 1, Water: 1, Grass: 2, Electric: 1, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Fairy: 2 },
    Ground: { '???': 1, Normal: 1, Fighting: 1, Flying: 0, Poison: 2, Ground: 1, Rock: 2, Bug: 0.5, Ghost: 1, Steel: 2, Fire: 2, Water: 1, Grass: 0.5, Electric: 2, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Fairy: 1 },
    Rock: { '???': 1, Normal: 1, Fighting: 0.5, Flying: 2, Poison: 1, Ground: 0.5, Rock: 1, Bug: 2, Ghost: 1, Steel: 0.5, Fire: 2, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 2, Dragon: 1, Dark: 1, Fairy: 1 },
    Bug: { '???': 1, Normal: 1, Fighting: 0.5, Flying: 0.5, Poison: 0.5, Ground: 1, Rock: 1, Bug: 1, Ghost: 0.5, Steel: 0.5, Fire: 0.5, Water: 1, Grass: 2, Electric: 1, Psychic: 2, Ice: 1, Dragon: 1, Dark: 2, Fairy: 0.5 },
    Ghost: { '???': 1, Normal: 0, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 2, Steel: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 2, Ice: 1, Dragon: 1, Dark: 0.5, Fairy: 1 },
    Steel: { '???': 1, Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 2, Bug: 1, Ghost: 1, Steel: 0.5, Fire: 0.5, Water: 0.5, Grass: 1, Electric: 0.5, Psychic: 1, Ice: 2, Dragon: 1, Dark: 1, Fairy: 2 },
    Fire: { '???': 1, Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 0.5, Bug: 2, Ghost: 1, Steel: 2, Fire: 0.5, Water: 0.5, Grass: 2, Electric: 1, Psychic: 1, Ice: 2, Dragon: 0.5, Dark: 1, Fairy: 1 },
    Water: { '???': 1, Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 2, Rock: 2, Bug: 1, Ghost: 1, Steel: 1, Fire: 2, Water: 0.5, Grass: 0.5, Electric: 1, Psychic: 1, Ice: 1, Dragon: 0.5, Dark: 1, Fairy: 1 },
    Grass: { '???': 1, Normal: 1, Fighting: 1, Flying: 0.5, Poison: 0.5, Ground: 2, Rock: 2, Bug: 0.5, Ghost: 1, Steel: 0.5, Fire: 0.5, Water: 2, Grass: 0.5, Electric: 1, Psychic: 1, Ice: 1, Dragon: 0.5, Dark: 1, Fairy: 1 },
    Electric: { '???': 1, Normal: 1, Fighting: 1, Flying: 2, Poison: 1, Ground: 0, Rock: 1, Bug: 1, Ghost: 1, Steel: 1, Fire: 1, Water: 2, Grass: 0.5, Electric: 0.5, Psychic: 1, Ice: 1, Dragon: 0.5, Dark: 1, Fairy: 1 },
    Psychic: { '???': 1, Normal: 1, Fighting: 2, Flying: 1, Poison: 2, Ground: 1, Rock: 1, Bug: 1, Ghost: 1, Steel: 0.5, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 0.5, Ice: 1, Dragon: 1, Dark: 0, Fairy: 1 },
    Ice: { '???': 1, Normal: 1, Fighting: 1, Flying: 2, Poison: 1, Ground: 2, Rock: 1, Bug: 1, Ghost: 1, Steel: 0.5, Fire: 0.5, Water: 0.5, Grass: 2, Electric: 1, Psychic: 1, Ice: 0.5, Dragon: 2, Dark: 1, Fairy: 1 },
    Dragon: { '???': 1, Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 1, Steel: 0.5, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 1, Dragon: 2, Dark: 1, Fairy: 0 },
    Dark: { '???': 1, Normal: 1, Fighting: 0.5, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 2, Steel: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 2, Ice: 1, Dragon: 1, Dark: 0.5, Fairy: 0.5 },
    Fairy: { '???': 1, Normal: 1, Fighting: 2, Flying: 1, Poison: 0.5, Ground: 1, Rock: 1, Bug: 1, Ghost: 1, Steel: 0.5, Fire: 0.5, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 1, Dragon: 2, Dark: 2, Fairy: 1 }
};
//# sourceMappingURL=types.js.map