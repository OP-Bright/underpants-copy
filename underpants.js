// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function (value) {
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function (value) {
    // first do typeof.
    // if the typeof says it is an array, do an Array.isArray to check it.
    // if it's not it's an object, print object.
    // if it is, it's an array, print array.
    // if it's neither, then just print the typeof.

    if (typeof value === "object") {
        if (value === null) {
            return "null";
        }
        if (Array.isArray(value)) {
            return "array"
        } else {
            return "object"
        }
    } else {
        return typeof value;
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function (arr, num) {
    // if not an array return an empty array.
    // if no num is given return first element in the array
    // if it is, then return the first <num> elements in the array
    // if it is greater than, return all elements
    // if it is negative don't do it.
    if (Array.isArray(arr) === false || num < 1) {
        return []
    }
    if (num === undefined || num === 1) {
        return arr[0]
    }
    if (num > arr.length) {
        return arr
    }
    let newArr = [];
    for (let i = 0; i < num; i++) {
        newArr.push(arr[i])
    }
    return newArr
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function (arr, num) {
    //if arr isn't an array or if num < 1 return an empty array.
    // if num is not given or not a number or 1 return just the last element in the array
    // if <num> > arr.length then return all.
    // return last <num> items in array

    if (Array.isArray(arr) === false || num < 1) {
        return []
    }
    if (num === undefined || num === 1) {
        return arr[arr.length - 1]
    }
    if (num > arr.length) {
        return arr
    }
    let newArr = [];
    // you have to reduce num by 1 since we're dealing with indexxed stuff.
    for (let i = num - 1; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (arr, value) {
    // if the value isn't in the array return -1
    if (arr.includes(value) === false) {
        return -1;
    }
    // return the index of the first instance of value
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function (arr, value) {
    return arr.includes(value) ? true : false; 
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function (collection, func) {
    // check if collection is an array
    if (Array.isArray(collection)) {
        // iterate over array if it is
        for (let i = 0; i < collection.length; i++) {
            // execute function passing in the appropriate parameters
            func(collection[i], [i], collection)
        }
    } else {
        // iterate over object if it isn't
        for (let i in collection) {
            // executre function passing in appropriate parameters
            func(collection[i], [i], collection)
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function (arr) {
    // establish new array
    let newArr = [];
    // iterate over array
    for (let i = 0; i < arr.length; i++) {
        // if the element is the first instance of the element, then add it to the new array
        if (i === _.indexOf(arr, arr[i])) {
            newArr.push(arr[i])
        }
    }
    // return the new array
    return newArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (inputArr, func) {
    // create new array
    // iterate over arr
    //if the result of passing in the appropriate arguments of the array into func is truthy, then push it to the new array.
    // return the new array
    let newArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (func(inputArr[i], i, inputArr)) {
            newArr.push(inputArr[i]);
        }
    }
    return newArr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (arr, func) {
    // create new array
    // iterate over arr, passing the appropriate arguements into func.
        //if the result is false, push the element into the new array.
    // return new array.
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(func(arr[i], i, arr))) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function (arr, func) {
    //make new array that contains 2 arrays
    // iterate over arr, passing in the appropriate arguments into func.
        // if func returns truthy, add the element to the first array in the new array
        // if the func returns falsy, add the element to the second array in the new array.
    // return new array.
    let newArr = [[], []]
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            newArr[0].push(arr[i]);
        } else {
            newArr[1].push(arr[i])
        }
    }
    return newArr;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection, func) {
    // declare new array
    // If collection is not an array, it's probably an object.
    // loop over the collection. for loop for an array, for in for an object.
        //new array.push(func(collection[i], i, collection)) 
    // return new array
    let newArr = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArr.push(func(collection[i], i, collection)) 
        }
    } else {
        for (let i in collection) {
            newArr.push(func(collection[i], i, collection)) 
        }
    }
    return newArr;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function (inputArr, property) {
    // create newArr
    // iterate over array
        // if inputArr is truthy, it probably exists. push it to newArr.
    // return newArr
    // why do i have to use _.map this is just not what it was made for.
    let newArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        _.map(inputArr[i], function (element, key) {
            if (key === property) {
                newArr.push(element);
            }
        })
    }
    return newArr
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

 _.every = function (collection, func) {
    // is func given or not a function? then just go with truthy or falsy values as the test.
    // loop over the collection. for loop for an array, for in for an object.
        //if (collection[i]) {do nothing} else {return false;}
        // return true
    // If collection is not an array, it's probably an object.
    // loop over the collection. for loop for an array, for in for an object.
        //if (func(collection[i], i, collection)) {do nothing} else {return false;}
        // return true
    if (Array.isArray(collection)) {
        if (func) {
            for (let i = 0; i < collection .length; i++) {
                if (func(collection[i], i, collection)) {
                    
                } else {
                    return false
                }
            }
            return true
        } else {
            for (let i = 0; i < collection .length; i++) {
                if (collection[i]) {
                    
                } else {
                    return false
                }
            }
            return true
        }
    } else {
        if (func) {
            for (let i in collection) {
                if (func(collection[i], i, collection)) {
                    
                } else {
                    return false
                }
            }
            return true
        } else {
            for (let i in collection  ) {
                if (collection[i]) {
                    
                } else {
                    return false
                }
            }
            return true
        }
    }
 }

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function (collection, func) {
    // is func given or not a function? then just go with truthy or falsy values as the test.
    // loop over the collection. for loop for an array, for in for an object.
        //if (collection[i], i, collection) {return true}, otherwise do nothing
        // return false
    // If collection is not an array, it's probably an object.
    // loop over the collection. for loop for an array, for in for an object.
        //if (func(collection[i], i, collection)) {return true}, otherwise do nothing
        // return false

        if (Array.isArray(collection)) {
            if (func) {
                for (let i = 0; i < collection .length; i++) {
                    if (func(collection[i], i, collection)) {
                        return true
                    } 
                }
                return false
            } else {
                for (let i = 0; i < collection .length; i++) {
                    if (collection[i]) {
                       return true 
                    }
                }
                return false
            }
        } else {
            if (func) {
                for (let i in collection) {
                    if (func(collection[i], i, collection)) {
                        return true
                    } 
                }
                return false
            } else {
                for (let i in collection  ) {
                    if (collection[i]) {
                        return true
                    }
                }
                return false
            }
        }
     }

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function (arr, func, seed) { // if seed isn't given, set it to the first element of the array.
    // store previous result, initializing it to seed.
        //loop over the array. Call func on every item in the array, passing in the appropriate arguments
        // set previous result to the result of calling func on the element.
    // return the last element, which should currently be the "previous result"
    if (seed === undefined) {
        let previousResult = arr[0];
        for (let i = 1; i < arr.length; i++) {
            previousResult = func(previousResult, arr[i], i);
        }
        return previousResult;
    } else {
        let previousResult = seed;
        for (let i = 0; i < arr.length; i++) {
            previousResult = func(previousResult, arr[i], i);
        }
        return previousResult;
    }

}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the updated <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function (obj1, ...objects) {
    // store arguments.
    // loop over the args.
        // for every arg, loop over its properties, adding the property of the other ones to the first one.
    let args = objects;
    let newObj = obj1;
    for (let i = 0; i < args.length; i++) {
        for (let thing in args[i]) {
            newObj[thing] = args[i][thing];
        }
    }
    return newObj;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}