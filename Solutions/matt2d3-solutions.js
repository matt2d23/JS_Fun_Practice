// 1. Write a function identity that takes an argument and returns that argument

const identity = (x) => x;

// 2. Write a binary function addb that takes two numbers and returns their sum

const addb = (x, y) => x+y;

// 3. Write a binary function subb that takes two numbers and returns their difference

const subb = (x, y) => x-y;

// 4. Write a binary function mulb that takes two numbers and returns their product

const mulb = (x, y) => x*y;

// 5. Write a binary function minb that takes two numbers and returns the smaller one

const minb = (x, y) => x < y ? x : y;

// 6. Write a binary function maxb that takes two numbers and returns the larger one

const maxb = (x, y) => x > y ? x : y;

// 7. Write a function add that is generalized for any amount of arguments

const add = (...nums) => nums.reduce((accumulator, currentValue) => accumulator + currentValue);

// 8. Write a function sub that is generalized for any amount of arguments

const sub = (...nums) => nums.reduce((accumulator, currentValue) => accumulator - currentValue);

// 9. Write a function mul that is generalized for any amount of arguments

const mul = (...nums) => nums.reduce((accumulator, currentValue) => accumulator * currentValue);

// 10. Write a function min that is generalized for any amount of arguments

const min = (...nums) => nums.reduce((accumulator, currentValue) => accumulator < currentValue ? accumulator : currentValue);

// 11. Write a function max that is generalized for any amount of arguments

const max = (...nums) => nums.reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue);

// 12. Write a function addRecurse that is the generalized add function but uses recursion

const addRecurse = (...nums) => {
    if (nums.length === 1) {
        return nums[0]
    } else {
        return nums.shift() + addRecurse(...nums);
    }
}

module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    sub,
    mul,
    min,
    max,
    addRecurse,
    // mulRecurse,
    // minRecurse,
    // maxRecurse,
    // not,
    // acc,
    // accPartial,
    // accRecurse,
    // fill,
    // fillRecurse,
    // set,
    // identityf,
    // addf,
    // liftf,
    // pure,
    // curryb,
    // curry,
    // inc,
    // twiceUnary,
    // doubl,
    // square,
    // twice,
    // reverseb,
    // reverse,
    // composeuTwo,
    // composeu,
    // composeb,
    // composeTwo,
    // compose,
    // limitb,
    // limit,
    // genFrom,
    // genTo,
    // genFromTo,
    // elementGen,
    // element,
    // collect,
    // filter,
    // filterTail,
    // concatTwo,
    // concat,
    // concatTail,
    // gensymf,
    // gensymff,
    // fibonaccif,
    // counter,
    // revocableb,
    // revocable,
    // extract,
    // m,
    // addmTwo,
    // addm,
    // liftmbM,
    // liftmb,
    // liftm,
    // exp,
    // expn,
    // addg,
    // liftg,
    // arrayg,
    // continuizeu,
    // continuize,
    // vector,
    // exploitVector,
    // vectorSafe,
    // pubsub,
    // mapRecurse,
    // filterRecurse,
};




