const palindromes = function (str) {
    let cleaned = str.replace(/[^\w]/g, "").toLowerCase()
    return cleaned === cleaned.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
