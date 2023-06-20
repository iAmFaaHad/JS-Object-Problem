[2, 3, 4, 5]
1 > {}

//bubble sorting 
// Bubble sort algorithm is an algorithm that sorts an array by comparing two adjacent elements and swapping them if they are not in the intended order. Here order can be anything like increasing/ascending or decreasing/descending.

function bubbleSort(arr) {
    for (let outerIndex = 0; outerIndex < arr.length; outerIndex++) {
        for (let innerIndex = 0; innerIndex < arr.length; innerIndex++) {

            // descending [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
            if (arr[innerIndex] < arr[innerIndex + 1]) {
                [arr[innerIndex + 1], arr[innerIndex]] = [arr[innerIndex], arr[innerIndex + 1]]
            }

            // ascending [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            // if (arr[innerIndex] > arr[innerIndex + 1]) {
            //     [arr[innerIndex], arr[innerIndex + 1]] = [arr[innerIndex + 1], arr[innerIndex]]

            // }
        }
    }
    return arr;

}
console.log(bubbleSort([3, 7, 6, 9, 2, 1, 8, 10, 4, 5]));


