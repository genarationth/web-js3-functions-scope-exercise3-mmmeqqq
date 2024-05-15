//3.1
function calCost (amount){
const fee = 3;
const interestRate = 0.001;
let interestFee = amount * interestRate;
let totalCost = amount + fee + interestFee;
return totalCost;
}
console. log (calCost (3000));




//ex 3.2.1

let greetFriends = function(name1,name2,name3) {
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
}
greetFriends('Bee','Champ','Naay')


//ex 3.2.2
    let age = function (currentYear, birthYear) {
        return currentYear - birthYear;
    }
    console.log(age(2024, 1996));

//ex3.2.3
let greetingFriend = function(name1,age1,name2,age2,name3,age3) {
    console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`);
}

greetingFriend('Bee',1993,'Bew',1996,'Windsuft',2006)


//challenge1


//challenge2


//challenge3