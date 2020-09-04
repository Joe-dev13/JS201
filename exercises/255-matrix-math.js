// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

const sum = (mA,mB) => {
    
    var result = []

    result = new Array (mA.length);
    for ( let i = 0; i < result.length; i++){
        result[i] = new Array(mA[i].length);
            for (let j = 0; j < result[i].length; j++){
                result[i][j] = mA[i][j] + mB[i][j]
            }
        }
    return result;
}
sum();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

const Multiply = (mA,mB) => {
    
    var result = []

    result = new Array (mA.length);
    for ( let i = 0; i < result.length; i++){
        result[i] = new Array(mA[i].length);
            for (let j = 0; j < result[i].length; j++){
                result[i][j] = mA[i][j] * mB[i][j]
            }
        }
    return result;
}
Multiply();