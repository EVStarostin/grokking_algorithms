/* 
    Множества (Множества не содержат дубликатов).
*/

/**
 * Переданный массив преобразуется в множество 
 * @param {any[]} arr 
 */
function set(arr) {
    const newArr = [];
    arr.forEach(el => {
        if ( newArr.indexOf(el) < 0 ) newArr.push(el);
    });
    return newArr;
}

const x = set( [1, 2, 2, 3, 3, 3] );
console.log(x);

const y = set( [3, 4, 5, 5, 5, 5] );
console.log(y);

/**
 * Под операцией пересечения множеств понимается поиск элементов,
 * входящих в оба множества (в данном случае - только помидор). 
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 */
function intersection(arr1, arr2) {
    const newArr = [];
    arr1.forEach(el => {
        if (arr2.indexOf(el) >= 0) newArr.push(el);
    });
    return newArr;
}

const z = intersection(x, y);
console.log(z);
