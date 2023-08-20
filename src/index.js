const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

const MORSE_TABLE_SUPER = {};

for (const key in MORSE_TABLE) {
    MORSE_TABLE_SUPER[
        key.replaceAll(".", "10").replaceAll("-", "11").padStart(10, "0")
    ] = MORSE_TABLE[key];
}

MORSE_TABLE_SUPER["**********"] = " ";

function decode(expr) {
    const splitted = [];

    for (let i = 0; i < expr.length; i += 10) {
        const substring = expr.substring(i, i + 10);
        splitted.push(substring);
    }

    return splitted.map((substring) => MORSE_TABLE_SUPER[substring]).join("");
}

module.exports = {
    decode,
};
