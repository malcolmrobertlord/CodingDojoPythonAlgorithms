// Write a function that given a sorted array of positive page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"
function bookIndex(arr){
    var final_string = ""
    var temp=[arr[0]]
    for (var i=1;i<=arr.length;i++) {
        if (arr[i]===(arr[i-1])+1){
            temp.push(arr[i])
        }
        else {
            if (i<arr.length) {
                final_string += (getStringFromArray(temp) + ", ")
                temp=[arr[i]]
            }
            else {
                final_string += (getStringFromArray(temp))
            }
        }
    }
    return final_string
}

// helper function to return array as a string "beg-end" or if a single element just string version of element
function getStringFromArray(array) {
    if (array.length>1) {
        return array[0].toString() + '-' + array[array.length-1].toString();
    }
    else if (array.length===1){
        return array[0].toString()
    }
    else {
        return "Error! This array is empty."
    }
}

console.log(bookIndex([1,3,4,5,7,8,10,12,14]))