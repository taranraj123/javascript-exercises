function age(person) {
    endYear = person.yearOfDeath === undefined ? (new Date()).getFullYear() : person.yearOfDeath
    return endYear - person.yearOfBirth
}

const findTheOldest = function(arr) {
    return arr.sort((p1, p2) => age(p1) - age(p2)).pop()
};

// Do not edit below this line
module.exports = findTheOldest;
