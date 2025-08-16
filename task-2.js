/**
 * ### Task -2: 
Find the friend with the smallest name.
<br>
`const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

 */

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function nameLowest(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return "invalid";
    }

    let smallest = arr[0];
    for (const name of arr) {
        if(name.length < smallest.length){
            smallest = name;
        }
    }
    return smallest;
}

console.log(nameLowest(heights2));