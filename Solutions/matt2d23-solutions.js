// 1. Write a function 'identity' that takes an argument and returns that argument

const identity = (x) => x;

// 2. Write a binary function 'addb' that takes two numbers and returns their sum

const addb = (x, y) => x+y;

// 3. Write a binary function 'subb' that takes two numbers and returns their difference

const subb = (x, y) => x-y;

// 4. Write a binary function 'mulb' that takes two numbers and returns their product

const mulb = (x, y) => x*y;

// 5. Write a binary function 'minb' that takes two numbers and returns the smaller one

const minb = (x, y) => x < y ? x : y;

// 6. Write a binary function 'maxb' that takes two numbers and returns the larger one

const maxb = (x, y) => x > y ? x : y;

// 7. Write a function 'add' that is generalized for any amount of arguments

const add = (...nums) => nums.reduce((accumulator, currentValue) => accumulator + currentValue);

// 8. Write a function 'sub' that is generalized for any amount of arguments

const sub = (...nums) => nums.reduce((accumulator, currentValue) => accumulator - currentValue);

// 9. Write a function 'mul' that is generalized for any amount of arguments

const mul = (...nums) => nums.reduce((accumulator, currentValue) => accumulator * currentValue);

// 10. Write a function 'min' that is generalized for any amount of arguments

const min = (...nums) => nums.reduce((accumulator, currentValue) => accumulator < currentValue ? accumulator : currentValue);

// 11. Write a function 'max' that is generalized for any amount of arguments

const max = (...nums) => nums.reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue);

// 12. Write a function 'addRecurse' that is the generalized add function but uses recursion

const addRecurse = (...nums) => {
    if (nums.length === 1) {
        return nums[0];
    } else {
        return nums.shift() + addRecurse(...nums);
    }
}

// 13. Write a function 'mulRecurse' that is the generalized mul function but uses recursion

const mulRecurse = (...nums) => {
    if (nums.length === 1) {
        return nums[0];
    } else {
        return nums.shift() * mulRecurse(...nums);
    }
}

// 14. Write a function 'minRecurse' that is the generalized min function but uses recursion

const minRecurse = (...nums) => {
    if (nums.length === 1) {
        return nums[0];
    } else {
        return minRecurse(nums.reduce((accumulator, currentValue) => accumulator < currentValue ? accumulator : currentValue));
    }
}

// 15. Write a function 'maxRecurse' that is the generalized min function but uses recursion

const maxRecurse = (...nums) => {
    if (nums.length === 1) {
        return nums[0];
    } else {
        return maxRecurse(nums.reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue));
    }
}

// 16. Write a function 'not' that takes a function and returns the negation of its result

const not = (fn) => {
    return !fn;
}

// 17. Write a function acc that takes a function and an initial value,
// and returns a function that runs the initial function on each argument, accumulating the result

function acc(func, initial) {
    return (...args) => {
        let result = args.reduce((accumulator, currentValue) => func(accumulator, currentValue), initial);
        return result;
    }
}

// 18. Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that 
// accumulates a subset of its arguments by applying the given function to all elements between start and end.

function accPartial(func, start, end) {
    return (...args) => {
        let subset = args.slice(start, end);
        let result = subset.reduce((accumulator, currentValue) => func(accumulator, currentValue));
        args.splice(start, subset.length);
        args.push(result);
        args.sort((a,b) => a > b);
        return args;
    }
}

// exports for testing

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
    mulRecurse,
    minRecurse,
    maxRecurse,
    not,
    acc,
    accPartial,
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




