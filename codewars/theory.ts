const nums1 = [10, 15, 20, 25];
// nums.map() проходит по каждому элементу.
// num => num % 4 — берёт остаток от деления num на 4.
// Результат автоматически добавляется в новый массив remain1.

// стрелочная функция ----------------------------------------------------------
const remain1 = nums1.map(num => num % 4);
console.log(remain1);

nums1.forEach(num => console.log(num % 4)); //вывод через foreach


//function declaration ----------------------------------------------------------
    const remain2 = nums1.map(function(num) {
    return num % 4;
});
console.log(remain2);

nums1.forEach(function(num) { //вывод через foreach
    console.log(num % 4);
});


//именованная функция-------------------------------------------------------------
function getRemainder(num) { // Объявляем функцию отдельно
    return num % 4;
}
const remain3 = nums1.map(getRemainder); // Передаём её в .map()
console.log(remain3);

function logRemainder(num) { //вывод через foreach
    console.log(num % 4);
}
nums1.forEach(logRemainder);
//--------------------------------------------------------------------------------


//функция без возврата------------------------------------------------------------
function greet(name: string): void { //
    console.log(`Привет, ${name}!`);
}
greet("Анна"); // вызов


function clearArray(arr: number[]): void {
    arr.length = 0; // Очищает массив
}
const nums = [1, 2, 3];
console.log(nums);
clearArray(nums); // Теперь nums = []
console.log(nums);