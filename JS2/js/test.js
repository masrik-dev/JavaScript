function sum(num3, num4) {
    if (num4 === undefined) {
        return num3 + num3;
    }
    return num3 + num4;
}
console.log(sum(2, 6))
console.log(sum(15))