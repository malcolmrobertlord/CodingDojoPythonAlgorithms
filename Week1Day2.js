// 1 Parenthesis Validator


// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// // ONLY care about the parens in the string

// function parensValid(str) {
//     var openparens = 0
//     var closedparens = 0
//     for(var i=0;i<str.length;i++) {
//         if (str[i] === "(") {
//             openparens += 1
//         }
//         if (str[i] === ")") {
//             closedparens += 1
//         }
//         if (closedparens > openparens) {
//             return false
//         }
//         }
//     if (openparens == closedparens) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(parensValid("y(3(p)p(3)r)s"))
// console.log(parensValid("(("))
// console.log(parensValid("n)0(t(o)k"))

// // 2 Braces Validator
// // Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// // Example 1: "({[({})]})" --> true
// // Example 2: "d(i{a}l[t]o)n{e!" --> false
// // Example 3: "{{[a]}}(){bcd}{()}" --> true
// // if ({)} => false
// // hint: consider using an array or object to solve

function bracesValid(str) {
    var openarr = []
    var closedarr = []
    for(var j=0;j<str.length;j++) {
        if (str[j] === "(" || str[j] === "{" || str[j] === "[") {
            openarr.push(str[j])
        }
        if (str[j] === ")" || str[j] === "}" || str[j] === "]") {
            closedarr.push(str[j])
        }
    }
    console.log(openarr)
    console.log(closedarr)
    if (openarr.length != closedarr.length) {
        return false
    }
    for (var k=0;k<openarr.length;k++) {
        if (openarr[k]=="(") {
            if (closedarr[openarr.length-k-1]!=")") {
                return false
            }
        }
        if (openarr[k]=="{") {
            if (closedarr[openarr.length-k-1]!="}") {
                return false
            }
        }
        if (openarr[k]=="[") {
            if (closedarr[openarr.length-k-1]!="]") {
                return false
            }
        }
    }
    return true
}

// console.log(bracesValid("{{[]}}(){}{()}"))

// how do combination && with || statements work? for example:

// statement 1 && statement 2 || statment 3

// does it work like this: (statement 1 && statement 2) || statement 3 

// or like this:
// statement 1 && (statement 2 || statement 3)