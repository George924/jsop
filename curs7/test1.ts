Sir Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
//Date de intrare:
9
25
//Date de iesire:
34
77205

function fibonacciValue (nr: number): number {
    if (nr < 2) {
        return 1;
    }
    let prev: number = 0;
    let current: number = 1;

    let i: number;
    for(i = 2; i <= nr; i++) {

        [prev, current] = [current, prev + current];
    }
    return current;
};

console.log(fibonacciValue(9));


