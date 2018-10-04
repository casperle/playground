/**
 * Please implement this method to return count of chunks in given array of numbers.
 *
 * Chunk is defined as continous sequence of one or more numbers separated by one or more zeroes.
 * Array can contain leading and trailing zeroes.
 *
 * Example: array [5, 4, 0, 0, -1, 0, 2, 0, 0] contains 3 chunks
 */

function countChunks(arrayOfNumbers) {
    let newChunk = true;
    let lastNum;

    return arrayOfNumbers.reduce((count, num) => {
        if (newChunk && num !== 0) {
            count++;
            newChunk = false;
        }

        if (!newChunk && num === 0 && lastNum !== 0) {
            newChunk = true;
        }

        lastNum = num;

        return count;
    }, 0);
  
}
  
const arr = [5, 4, 0, 0, -1, 0, 2, 0, 0];

console.log(countChunks(arr));
  