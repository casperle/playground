/**
 * Please implement this method to return the number 
 * in the array of numbers that is closest to zero.
 * If there are two equally close to zero elements like 2 and -2
 * - consider the positive element to be "closer" to zero.
 *
 * Example: for array [5, -4, 2, 8, -1, 3, 1, 5, 2] the function should return 1
 */

function getAbsMax(arrayOfNumbers) {
    return arrayOfNumbers
        .reduce((_max, num) => {
            const absNum = Math.abs(num);

            return _max < absNum ? absNum : _max;
        }, 0);
  }
  
  
  function getClosestToZero(arrayOfNumbers) {
  
    const closestTo = 0;
    let minDiff = getAbsMax(arrayOfNumbers);
    let closestNum = 0;

    arrayOfNumbers.forEach((num) => {
        const diff = Math.abs(closestTo - num);

        if(diff < minDiff){ 
            minDiff = diff; 
            closestNum = num;
        }
    });

    if (Math.sign(closestNum) === -1) {
        const absClosestNum = Math.abs(closestNum);

        return arrayOfNumbers.find((num) => num === absClosestNum) || closestNum;
    }

    return closestNum;
}
  
  console.log(getClosestToZero([5, -4, 2, 8, -1, 3, 1, 5, 2]))
