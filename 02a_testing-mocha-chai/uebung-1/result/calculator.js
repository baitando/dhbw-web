function sum(a, b) {
    if(isNaN(a) || isNaN(b)) {
        throw new Error("illegal arguments");
    }

    return parseInt(a) + parseInt(b);
}
