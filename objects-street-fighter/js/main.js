//Create a pizza constructor that makes fighting game characters with 4 properties and 3 methods
function streetFighter(name,health,speed,specialMove){
    this.name = name
    this.health = health
    this.speed = speed
    this.specialMove = specialMove

    this.throq = function(){
        console.log('Yeet')
    }
    this.taunt = function(){
        console.log(`You cant handel my $(this.specialMove)`)
    }
    this.intro = function(){
        console.log(`Hello i am ${this.name}`)
    }
}

let bigNoNo = new streetFighter('Big NO-NO',150,15,'Yummy Gummy')