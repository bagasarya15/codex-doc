function diagonalDifference(matrix) {
    let diagonal = matrix[0][0] + matrix [1][1] + matrix [2][2];
    let diagonal2 = matrix[0][2] + matrix [1][1] + matrix [2][0];
    return Math.abs(diagonal - diagonal2)
}

console.log(diagonalDifference( [[11,2,4], [4,5,6], [10,8,-12]] ));

// 3
// 11 2  4
// 4  5  6
// 10 8 -12

// 11 + 5 + -12 = 4 
// 4 + 5 + 10 = 19
// 19 -4 = 15