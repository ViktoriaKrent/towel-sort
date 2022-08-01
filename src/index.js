module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    matrix.forEach((e, i) =>
        i % 2 === 0 ? e.sort((a, b) => a - b) : e.sort((a, b) => b - a)
    );
    return matrix.reduce((acc, e) => {
        acc.push(...e);
        return acc;
    }, []);
};
