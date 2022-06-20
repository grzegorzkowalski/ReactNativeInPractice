const isPalidrom = (str) => {
    const strToLower = str.replace(/\s/g, '').toLowerCase();
    const strReverse = [...strToLower].reverse().join("");
    return strToLower === strReverse;
}

console.log(isPalidrom('A to kawa kota'));
console.log(isPalidrom('Ala ma kota'));
