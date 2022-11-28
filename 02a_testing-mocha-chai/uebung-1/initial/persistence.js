function saveCalculation(a, b, result, key) {
    const calculation = JSON.stringify({
       a: a,
       b: b,
       result: result
    });

    return localStorage.setItem(key, calculation);
}
