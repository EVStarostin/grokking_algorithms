/* 
Сортировка выбором 
 */
function findSmallest(arr) {
    smallest = arr[0];
    smallest_index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

function selectionSort(arr) {
    newArr = [];
    while (arr.length > 0) {
        smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1)[0]);
    }
    return newArr;
}

let x = selectionSort([5, 3, 6, 2, 10]);
console.log(x);
