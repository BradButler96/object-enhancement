const filterOutOdds = (...nums) => nums.filter(n => n % 2 === 0)

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...vals) => {
    const doubled = vals.map((nums) => {
        return nums * 2
    })
    return [...arr, ...doubled]
};

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const itemsCopy = [...items];
    const i = Math.floor(Math.random() * items.length);
    itemsCopy.splice(i, 1);
    return itemsCopy;
}

/** Return a new array with every item in array1 and array2. */

const extend = ((array1, array2) => [...array1, ...array2])

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}