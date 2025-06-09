class Base {
  public getMas(n: string): number[] {
    // static?
    const result = n.split("").reverse().map(Number);
    console.log(result);
    return result;
  }
}
const base = new Base();
base.getMas("12345");

function getMas(n: string): number[] {
  const result = n.split("").reverse().map(Number);
  console.log(result);
  return result;
}
getMas("1234");

export function getGrade(a: number, b: number, c: number): string {
  const avg = Math.round((a + b + c) / 3);
  let A = 5;
  console.log(A > 10 ? "Больше" : "Меньше"); // тернарный оператор
  return avg < 60
    ? "F"
    : avg < 70
    ? "D"
    : avg < 80
    ? "C"
    : avg < 90
    ? "B"
    : "A"; // вложенный тернарный оператор
  // if (avg >= 90) return 'A';
  // if (avg >= 80) return 'B';
  // if (avg >= 70) return 'C';
  // if (avg >= 60) return 'D';
  // return 'F';
}
console.log(getGrade(145, 511, 60));

export const reverseSeq = (n: number): number[] => { //массив с добавлением наоборот
  const mas: number[] = [];
  for (let i = n; i >= 1; i--) {
    //цикл
    mas.push(i);
  }
  return mas;
};
console.log(reverseSeq(6));

export function evenOrOdd(n: number): string {  //"Even" чёт, "Odd" нечёт
  return n % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(15));

export function stringToNumber(str: string): number { // строка в число
  return Number(str);
}
console.log(stringToNumber("123"))

export function setAlarm(employed: boolean, vacation: boolean) { // boolean
  return employed && !vacation
}
console.log(setAlarm(true, false));
console.log(setAlarm(true, true));

export function makeUpperCase(str: string): string{ // toUpperCase
  return str.toUpperCase()
}
console.log(makeUpperCase("assASS"))

export function abbrevName(name: string): string { // аббревиатуры
  const [first, last] = name.toUpperCase().split(" ");
  return `${first[0]}.${last[0]}`;
  // let A = name.split(" ");
  // let B = A[0].toString().charAt(0);
  // let C = A[1].toString().charAt(0);
  // let D = B+"."+C
  // return D.toUpperCase()
}
console.log(abbrevName("Danil Zaborovschi"))

export const booleanToString = (b:boolean):string => String(b)
  //export const booleanToString = (b:boolean):string => {
  //return String(b); вариант 1
  //if (b == true) return "true"; вариант 2
  //else return "false";
console.log(booleanToString(false))


export const summation = (num:number)=> {
  let result = 0;
  for (let i = 1; i <=num; i++) {
    result += i;
  }
  return result;
}
console.log(summation(3))

