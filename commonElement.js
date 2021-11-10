function printIntersection(arr1, arr2) {
    var m = arr1.length;
    var n = arr2.length;

    var i = 0, j = 0;
    while (i < m && j < n) {
        if (arr1[i] < arr2[j])
            i++;
        else if (arr2[j] > arr1[i])
            j++;
        else {
            console.log(arr2[j++] + " ");
            i++;
        }
    }
}
console.log(printIntersection([1, 2, 4, 5, 6], [2, 3, 5, 7]));




