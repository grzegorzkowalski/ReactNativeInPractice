const left = "A to kawa kota";
const right = "Ala ma kota";

function isPalidrom(text) {
    const deleteSpaces = [...text.toLowerCase()].filter(el => el !== " ").join("");
    return deleteSpaces === [...deleteSpaces].reverse().join("")
}

console.log(isPalidrom("A to kawa kota"));
console.log(isPalidrom("Ala ma kota"));
