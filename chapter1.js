/* 
1.1 Имеется отсортированный список из 128 имен, и вы ищете в нем значение
методом бинарного поиска. Какое максимальное количество
проверок для этого может потребоваться?
 */

let n = 128;
let x = Math.log(n) / Math.log(2);
console.log(x); // 7

/* 
1.2 Предположим, размер списка увеличился вдвое. Как изменится максимальное
количество проверок? 
 */
n = 256;
x = Math.log(n) / Math.log(2);
console.log(x); // 8

function binary_search(list, item) {
    let low = 0;
    let high = (list.length - 1);

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];
        if (guess === item) return mid;
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}

my_list = [1, 3, 5, 7, 9];
x = binary_search(my_list, 3);
console.log(x);