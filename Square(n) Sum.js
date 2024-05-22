function squareSum(numbers) {
    let result = 0;
    for (let i in numbers) {
        result += numbers[i] ** 2;
    }
    return result;
}
