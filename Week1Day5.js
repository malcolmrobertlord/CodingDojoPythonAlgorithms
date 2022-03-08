// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

function convertCoinChange(money) {
    money*=100
    var quarter=0
    var q = " quarters, "
    var dime=0
    var d = " dimes, "
    var nickel=0
    var n = " nickels, "
    var penny=0
    var p = " pennies."
    while (money>=25){
        money-=25;
        quarter++;
    }
    while (money>=10){
        money-=10;
        dime++;
    }
    while (money>=5){
        money-=5;
        nickel++;
    }
    while (money>0){
        money-=1;
        penny++;
    }
    if (quarter==1){
        q=" quarter, "
    }
    if (dime==1){
        d=" dime, "
    }
    if (nickel==1){
        n=" nickel, "
    }
    if (penny==1){
        p=" penny."
    }
    return (quarter + q + dime + d + nickel + n + "and " + penny + p)
}

console.log(convertCoinChange(.77))

// SOLUTION 2

function convertCoinChange2(money) {
    money*=100
    var quarters=0
    var q = " quarters, "
    var dimes=0
    var d = " dimes, "
    var nickels=0
    var n = " nickels, "
    var pennies=0
    var p = " pennies."
    quarters = Math.floor(money / 25);
    dimes = Math.floor((money%25)/10);
    nickels = Math.floor(((money%25)%10/5));
    pennies = Math.floor(((money%25)%10%5));
    if (quarters==1){
        q=" quarter, "
    }
    if (dimes==1){
        d=" dime, "
    }
    if (nickels==1){
        n=" nickel, "
    }
    if (pennies==1){
        p=" penny."
    }
    return (quarters + q + dimes + d + nickels + n + "and " + pennies + p)
}

console.log(convertCoinChange2(.76));