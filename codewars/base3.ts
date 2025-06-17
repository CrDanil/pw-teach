export function uniqueInOrder(iterable: string | (string | number)[]): (string | number)[] {
    // 1. Преобразуем входные данные в массив
    const arr = typeof iterable === 'string' ? iterable.split('') : [...iterable];

    // 2. Фильтруем повторяющиеся подряд элементы
    return arr.filter((item, index) => {
        return index === 0 || item !== arr[index - 1];
    });
}
console.log(uniqueInOrder([1,1,2,3,]));
console.log(uniqueInOrder("AABCc"));


