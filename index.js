function getSum(a, b) {
    return a + b;
    }

function getSmallestNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function castBoolean(value) {
    return Boolean(value);
}

function capitalize(string, index) {
    if (index < 0 || index >= string.length) {
        return string;
    }
}
