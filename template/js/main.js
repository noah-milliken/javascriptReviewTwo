for(let i = 0; i < 5; i++){
    console.log(`I like to eat ${i} pieces of pizza`)
}

for(let i = 10; i>= 1; i--){
    console.log(`I ran ${i} miles ${i+100} days ago`);
    
}
let x = 0;
while(x<5){
    console.log('bananas are great for cats')
    x++;
}
//do while loops should be used if you want to do something at least once.

let y = 10
do{
    console.log(x)
    y++;
}while (x < 5);

//math

console.log(Math.ceil((Math.random())*10))
console.log(Math.floor((Math.random())*10))


function squareArea(radius){
    console.log(2*Math.PI*radius^2)
}
squareArea(34)

function modulus(n1,n2){
    console.log(n1 % n2)
}
modulus(34,56)


let z = 45
let a = z*z
console.log(z);
console.log(a)


let obj = {
    name: 'horace',
    married: true,
    'mother\'s Name': 'Alice',
    'year of birth': 1234,
    getAge: function(){
        return 1234 - obj['year of birth']
    },
    1: 'one'

};

'original string'.replace('original', 'replaced');

let originaString = 'original string'
originaString = originaString.replace('original', 'barfing cats');
console.log(originaString)


let num1 = 5;
let num2 = num1 - 2;
let num3 = num1 % num2;
console.log(num1+num2+num3);