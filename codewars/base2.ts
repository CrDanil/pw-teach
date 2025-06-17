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

export function humanReadable(seconds:number):string { // секунды в ХХ:ХХ:ХХ
    function zero(n:number):string {
        return n.toString().padStart(2, '0');
    }
    const humanMas: string [] = [];
    const sec2 = zero(seconds%60)
    const minute = zero(Math.floor(seconds/60)%60)
    const hour = zero(Math.floor((seconds/60)/60))
    humanMas.push(hour+":"+minute+":"+sec2)
    return humanMas.toString()
}
console.log(humanReadable(30600))




function transform(str: string, from: string[], to: string[]): string { //code - decode
    const map: Record<string, string> = {};
    for (let i = 0; i < from.length; i++) {
        map[from[i]] = to[i];
    }
    return str.split("").map(ch => map[ch] || ch).join("");
}

export function encode(str: string): string {
    return transform(str, ["a", "e", "i", "o", "u"], ["1", "2", "3", "4", "5"]);
}

export function decode(str: string): string {
    return transform(str, ["1", "2", "3", "4", "5"], ["a", "e", "i", "o", "u"]);
}
console.log(encode("Hello"))
console.log(decode("h2ll4"))


export function orderWeight(strng: string): string { // "вес" цифр
    const nums = strng.trim().split(" ").filter(s => s !== "");

    const sorted = nums.sort((a, b) => {
        const sumA = a.split('').map(Number).reduce((acc, digit) => acc + digit, 0);
        const sumB = b.split('').map(Number).reduce((acc, digit) => acc + digit, 0);

        if (sumA !== sumB) {
            return sumA - sumB;
        } else {
            return a.localeCompare(b);
        }
    });

    return sorted.join(" ");
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));


// export function findUniqRaw(arr: number[]): number { // уникальный в массиве
//     for (let i = 0; i < arr.length; i++) {
//         let isNum = true;
//         for (let j = 0; j < arr.length; j++) { // Сравниваем текущий элемент со всеми остальными
//             if (i !== j && arr[i] === arr[j]) {
//                 isNum = false;
//                 break;
//             }
//         }
//         if (isNum) { // Если нашли уникальный - возвращаем его
//             return arr[i];
//         }
//     }
// }
// console.log(findUniqRaw([1,1,1,1,2,1,1,1,1]))
    // Внешний цикл проходит по всем элементам массива
    // Внутренний цикл сравнивает текущий элемент со всеми остальными
    // Если элемент не равен ни одному другому - он уникальный
    // Возвращаем первый найденный уникальный элемент

export function findUniq(arr: number[]): number { // уникальный в массиве
    // Проверяем первые три элемента, чтобы определить стандартное значение
    const standard = [arr[0], arr[1], arr[2]].find(num => [arr[0], arr[1], arr[2]]
        .filter(n => n === num).length > 1) || arr[0];
    //Находим элемент, который отличается от стандартного
    return arr.find(num => num !== standard)!;
}
console.log(findUniq([1,1,1,1,2,1,1,1,1]))