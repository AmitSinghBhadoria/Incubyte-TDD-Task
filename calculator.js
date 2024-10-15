class StringCalculator {
    Add(numbers) {
        // if numbers have a falsy value return 0
        if (!numbers) return 0;
        // Split Numbers String by , and store it in an array of numbers.
        const numArray = numbers.split(',').map(Number);
        // add all the numbers in the num Array
        return numArray.reduce((acc, curr) => acc + curr, 0);
    }
}

module.exports = StringCalculator;
