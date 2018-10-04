/**
 * You need to sort an array of integers by repeatedly reversing
 * the order of the first several elements of it.
 *
 * For example, to sort [11,14,12,13], you need to  reverse the order of the first two (2)
 * elements and get [14,11,12,13], then reverse the order of the first four (4) elements
 * and get [13,12,11,14] and then reverse the order of the first three (3) elements.
 *

 * The method should return array of integers corresponding to the required reversals.
 * For the previous example, given an array [11,14,12,13]
 * the method should return a array with integers [2,4,3].
 */

function getReversalsToSort(arrayOfNumbers) {
    let reversals = [];

    if (arrayOfNumbers == null || arrayOfNumbers.length < 2) return reversals;


    const sortedArray = [ ...arrayOfNumbers ];
    let maxNum = Math.max(...sortedArray);
    let maxLength = sortedArray.length - 1;

    while (maxLength > 0) {

        if (sortedArray[maxLength] === maxNum) {
            maxNum = Math.max(...sortedArray.slice(0, maxLength));
            maxLength--;
            continue;
        }

        for(let index = 0; index <= maxLength; index++) {

            if(sortedArray[index] === maxNum) {
                if (index === 0) {
                    const reverseCount = maxLength + 1;

                    sortedArray.splice(0, reverseCount, ...sortedArray.slice(0, reverseCount).reverse());
                    maxNum = Math.max(...sortedArray.slice(0, maxLength));
                    reversals.push(reverseCount);
                    maxLength--;

                    break;
                }
                else {
                    const reverseCount = index + 1;

                    sortedArray.splice(0, reverseCount, ...sortedArray.slice(0, reverseCount).reverse());
                    reversals.push(reverseCount);

                    break;
                }
            }
        }
    }

    return { sortedArray, reversals };
}

const arr = [10, 8, 11, 7, 9, 12, 11];

console.log(getReversalsToSort(arr));
