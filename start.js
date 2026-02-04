const method = process.argv[2];
const text = process.argv[3];
const number = parseInt(process.argv[4]);

if (!method || (method !== "E" && method !== "D")) {
    console.log("Please provide a method: 'E' or 'D'.");
    process.exit(1);
}

if (!text) {
    console.log("Please provide text to E/D.");
    process.exit(1);
}

if (isNaN(number)) {
    console.log("Please provide a valid number for shifting.");
    process.exit(1);
}

if (method === "E") {
    const encryptedText = Encrypt(text, number);
    console.log("Encrypted Text:", encryptedText);
}

if (method === "D") {
    const decryptedText = Decrypt(text, number);
    console.log("Decrypted Text:", decryptedText);
}

function Shift(number) {
    const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const shiftedArray = array.slice(number).concat(array.slice(0, number));
    return shiftedArray;
}

function Encrypt(text, number) {
    const shiftedArray = Shift(number);
    let encryptedText = "";
    for (let char of text) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (index >= 0 && index < 26) {
            encryptedText += shiftedArray[index];
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}

function Decrypt(text, number) {
    const shiftedArray = Shift(number);
    let decryptedText = "";
    for (let char of text) {
        const index = shiftedArray.indexOf(char);
        if (index !== -1) {
            decryptedText += String.fromCharCode(index + 'a'.charCodeAt(0));
        }
        else {
            decryptedText += char;
        }
    }
    return decryptedText;
}