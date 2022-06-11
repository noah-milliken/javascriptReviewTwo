// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function alertHi(arr) {
    if(arr[0]<arr[arr.length-1]){
        console.log("hi")
    }else if(arr[0]>arr[arr.length-1]){
        console.log('bye')
    }else{
        console.log('we close in an hour')
    }
    
}alertHi([4,2,3,4,5,4])

let bestColors = ['yellow', 'red', 'blue', 'green']
bestColors.push('aquamarine')
for(let i = 0; i < bestColors.length; i++){
    console.log(bestColors[i])
}
bestColors.push('orange')

console.log(bestColors)

bestColors.forEach( i => {
    console.log(`the color ${i} is the best`)
});

let bestcolorsAllTime = console.log(bestColors.map(x => 'green'))

let worstColorOfAllTime = console.log(bestColors.map(x => 'yellow'))