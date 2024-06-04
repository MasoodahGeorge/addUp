function addUp(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(addUp([1, 2, 3]));