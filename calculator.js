class StringCalculator {
    Add(numbers) {
        // if numbers have a falsy value return 0
        if (!numbers) return 0;
        // Find if numbers String starts with //
        if (numbers.startsWith('//')) {
            //Extract Delemeter From numbers String 
            const [delimiterPart, numberPart] = numbers.split('\n');
            const delimiter = delimiterPart.slice(2);
            numbers = numberPart.split(delimiter).join(',');
        }
        // Split Numbers String by \n and join to create a new string with only comma seperated value.
        const commaSeperatedString = numbers.split("\n").join(",");
        // Split Numbers String by , and store it in an array of numbers.
        const numArray = commaSeperatedString.split(",").map(Number);
        // add all the numbers in the num Array
        return numArray.reduce((acc, curr) => acc + curr, 0);
    }
}

module.exports = StringCalculator;
