/* 
4.1 Напишите код для функции sum (см. выше).  
*/
function sum(list) {
    if (list.length == 0) {
        return 0
    }
    return list[0] + sum(list.splice(1)) 
}

let x = sum([1, 2, 3]);
console.log(x);

/* 
4.2 Напишите рекурсивную функцию для подсчета
элементов в списке. 
*/

function count(list) {
    if (list.length == 0) {
        return 0
    } else {
        return 1 + count(list.splice(1)) 
    }
}

x = count([1, 2, 3]);
console.log(x);

function max(list) {
    if (list.length == 2) {
        if (list[0] > list[1]) {
            return list[0]
        } else {
            return list[1]
        }
    }
    sub_max = max(list.splice(1));
    if (list[0] > sub_max) {
        return list[0]
    } else {
        return sub_max;
    }
}

x = max([1, 2, 3]);
console.log(x);


const getLess = (list, pivot) => {
    const arr = [];
    list.forEach(element => {
        if (element <= pivot) arr.push(element);
    });
    return arr;
}

const getGreater = (list, pivot) => {
    const arr = [];
    list.forEach(element => {
        if (element > pivot) arr.push(element);
    });
    return arr;
}

function quicksort(array) {
    if (array.length < 2) {
        return array;
    } else {
        pivot = array[0];
        less = getLess(array.splice(1), pivot);
        greater = getGreater(array.splice(1), pivot);
        const newArr = [].concat(quicksort(less), pivot, quicksort(greater));
        return newArr;
    }
}

console.log(quicksort([10, 5, 2, 3]));
