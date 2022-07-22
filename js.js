function selcttionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        //let temp = array[i];
        //array[i] = array[minIndex];
        //array[minIndex] = temp;
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}
var array = [7,4,74,2,34,1,9,100]
selcttionSort(array)
console.log(array);

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         // Finding the smallest number in the subarray
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if (min != i) {
//             // Swapping the elements
//             let tmp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = tmp;
//         }
//     }
//     return arr;
// }
// var arr = [7, 5, 2, 4, 3, 9 , 21,45324,4123,124,4235,456,678,89]
// console.log(arr)
// selectionSort(arr);