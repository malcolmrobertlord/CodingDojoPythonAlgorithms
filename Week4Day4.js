//Algorithm to take 2 numbers and add them without addition operator

function add_without_add(num1, num2) {
    sum = num1 - - num2;
    return sum;
}

console.log(add_without_add(2,5))
