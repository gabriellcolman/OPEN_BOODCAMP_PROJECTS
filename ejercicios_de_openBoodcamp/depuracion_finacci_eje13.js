function fibonacci(num) {
    let fiboArray = [0, 1];
    for (let i = 2; i < num; i++) {
      fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
    }
    return fiboArray;
}

console.log(fibonacci(6));
