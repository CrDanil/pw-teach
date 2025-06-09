class Base {
    public getMas(n: string): number[] { // static?
        const result = n.split('').reverse().map(Number);
        console.log(result);
        return result;
    }
}
const base = new Base();
base.getMas("12345");

function getMas(n: string): number[] {
    const result = n.split('').reverse().map(Number);
    console.log(result);
    return result;
}
getMas("1234");

export function getGrade(a: number, b: number, c: number): string {
    const avg = Math.round((a + b + c) / 3);
    let A= 5;
    console.log(A > 10 ? 'Больше' : 'Меньше'); // тернарный оператор
    return avg<60?"F":avg<70?"D":avg<80?"C":avg<90?"B":"A"; // вложенный тернарный оператор
    // if (avg >= 90) return 'A';
    // if (avg >= 80) return 'B';
    // if (avg >= 70) return 'C';
    // if (avg >= 60) return 'D';
    // return 'F';
}
console.log(getGrade(145,511,60))

export const reverseSeq = (n: number): number[] => {
    const mas: number[] = [];
    for (let i = n; i >= 1; i--) { //цикл
        mas.push(i);
    }
    return mas;
};
console.log(reverseSeq(6));

export function evenOrOdd(n:number):string {
    return n%2=== 0? 'Even' : 'Odd';  //"Even" чёт, "Odd" нечёт
}
console.log(evenOrOdd(15));