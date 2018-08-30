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

/**
 * Объединение множеств означает слияние элементов обоих множеств. 
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 */
function union(arr1, arr2) {
    const newArr = [].concat(arr1);
    arr2.forEach(el => {
        if (arr1.indexOf(el) < 0) newArr.push(el);
    });
    return newArr;
} 

/**
 * Под операцией пересечения множеств понимается поиск элементов,
 * входящих в оба множества. 
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

/**
 * Под разностью множеств понимается исключение из одного множества
 * элементов, присутствующих в другом множестве. 
 * @param {*any[]} arr1 
 * @param {*any[]} arr2 
 */
function difference(arr1, arr2) {
    const newArr = [];
    arr1.forEach(el => {
        if (arr2.indexOf(el) < 0) newArr.push(el);
    });
    return newArr;
}



const x = set( [1, 2, 2, 3, 3, 3] );
console.log(x);

const y = set( [3, 4, 5, 5, 5, 5] );
console.log(y);

let z = union(x, y);
console.log(z);

z = intersection(x, y);
console.log(z);

z = difference(x, y);
console.log(z);

