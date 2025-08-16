/**
 * ### Task -1: 
Find the lowest number in the array below.
<br>
`const heights2 = [167, 190, 120, 165, 137];`

 */

const heights2 = [167, 190, 120, 165, 137];

function lowest(arr){
    return Math.min(...arr);
}

console.log(lowest(heights2));

// console.log(Math.min(...heights2));