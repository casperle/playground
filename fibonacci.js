// f(n) = f(n - 1) + f(n - 2)

// While loop
function fibLoop(num) {
    let first = 0, second = 1, counter;

    while(num) {
        counter = first;
        first = first + second;
        second = counter;
        num--;
    }

    return counter;
}


// Recursion
function fibRecursion(num) {
    if (num < 2) return num;

    return fibRecursion(num - 1) + fibRecursion(num - 2);
}


// Recursion and memoization
function fibMemo(num, memo = {}) {
    if (num < 2) return num;
    if (memo[num]) return memo[num];

    return memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
}


// Tail recursion optimization and trampolines
function trampoline(fn) {
    return (...args) => {
        let result = fn(...args);

        while (typeof result === "function") {
            result = result();
        }

        return result;
    }
}

function fibTail(num) {
    const _tail = trampoline(function _myFunction(a, b, n) {
        return n > 1 ? () => { return _myFunction(b, a + b, --n) } : b;
    });

    return _tail(0, 1, num)
}


// Generators
function *fibGen(num) {
    let first = 0, second = 1, counter;

    while(num) {
        yield first;

        counter = first;
        first = first + second;
        second = counter;
        num--;
    }

    yield first;
}
