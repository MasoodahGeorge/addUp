document.querySelector('.button').addEventListener('click', function() {
    let input = document.getElementById('input').value;
    let numbers = input.split(',').map(Number);
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    document.querySelector('.answer').innerText = sum;
});