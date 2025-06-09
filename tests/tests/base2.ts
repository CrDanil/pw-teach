// export function toCamelCase(str:string):string { // camelCase
//     if (str != "") {
//         const mas = str.split(/[-_]/);
//         if ( mas.length == 3 ) {
//             mas[1] = mas[1].charAt(0).toUpperCase() + mas[1].slice(1);
//             mas[2] = mas[2].charAt(0).toUpperCase() + mas[2].slice(1);
//         } else if ( mas.length == 4 ) {
//             mas[1] = mas[1].charAt(0).toUpperCase() + mas[1].slice(1);
//             mas[2] = mas[2].charAt(0).toUpperCase() + mas[2].slice(1);
//             mas[3] = mas[3].charAt(0).toUpperCase() + mas[3].slice(1);
//         }
//         return mas.join('').toString()
//     } else {
//         return str;
//     }
// }
// console.log(toCamelCase("I-Am-a-programmer"));

export function toCamelCase(str: string): string { // camelCase
    const words = str.split(/[-_]/);
    return words
        .map((word, i) =>
            i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}
console.log(toCamelCase("I-Am-a-programmer"));