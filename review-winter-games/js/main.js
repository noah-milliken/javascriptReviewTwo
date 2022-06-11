//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function onlyEvens(arr){
    let onlyEvens = []
    arr.forEach(element => {
        if( element % 2 === 0){
            onlyEvens.push(element)
        }
        console.log(onlyEvens)
    });
}

onlyEvens([1,2,3,4,5,6,7,8,9,10])