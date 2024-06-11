const removeFromArray = function(target_array, ...args) {
    // What I did before realizing you could pass optional like above
    // args = Array.from(arguments)
    // target_array = args[0]
    // values_to_remove = args.slice(1)

    if (!Array.isArray(target_array)) return "First argument must be an Array"

    return target_array.filter((val) => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
