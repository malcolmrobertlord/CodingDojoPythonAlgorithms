// Problem 1 (reverse string)

var reversed = ''
function reversestr(string) {
    for (var i=string.length-1; i>=0; i--) {
        reversed+=string[i]
    }
    return reversed
}

console.log(reversestr("creature"))

// Problem 2 (acronym)

function acronym(str) {
    var acro = ''
    acro += str[0]
    for (var j = 0; j<str.length; j++){
        if (str[j]===" "){
            acro+=str[j+1]
        }
    }
    return acro.toUpperCase()
}

console.log(acronym("there's no free lunch - gotta pay yer way"));