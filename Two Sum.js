function twoSum(numbers, target) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < i; j++) {
            if (numbers[i] + numbers[j] == target) {
                result.push(i, j);
                return result; // возврат результата сразу после нахождения
            }
        }
    }
}
