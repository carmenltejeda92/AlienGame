/*  Author: Carmen Tejeda
    Date: 11/2/2023
    Purpose: Using knowledge of OOP, loops, and functions to build a rudimentary space battle game.
             The game will be programmed for, and played using window.prompt to get input from the user and buttons in the browser, console.log and window.alert can also be used */

const body = document.querySelector('body')
const imgDiv = document.querySelector('#us1')

class Assembly{
    constructor(name){
        this.name = name
        this.hull = 20
        this.firepower = 5
        this.accuracy = .70
    }

    health(){
            console.log('Ahh, we were shot!')
    }    
}

class Alien{
    constructor(name){
        this.name = name
        this.hull = Math.floor(Math.random() * (6-3) +3)
        this.firepower = Math.floor(Math.random() * (4-2) +2)
        this.accuracy = Number((Math.random() * (0.8-0.6) + 0.6).toFixed(2))
    }
}

let humanShips = 6
let humanArr =[]
const human1 = new Assembly('Carmen')
function createHuman(){
    for(let i=0; i<=humanShips; i++){
        let human = new Assembly()
        humanArr.push(human)
    }

    return humanArr
}


let alienShips = 6
let alienArr =[]
const alien1 = new Alien('Gorg')
function createAlien(){
    for(let i=0; i<=alienShips; i++){
        let alien = new Alien()
        alienArr.push(alien)
    }

    return alienArr
}



// who gets to shoot first
let earthTurn
let alienTurn

function getTurn(){
    let turn = Math.floor(Math.random() * 3)
    if(turn ===0){
        getTurn()
    }else if(turn ==1){
        earthTurn == true
        console.log('Earths turn!')
        return earthTurn
    }else if(turn ==2){
        alienTurn == false 
        console.log('Aliens turn .. booooo!')
        return alienTurn
    }
    
} 


function randomNum(){
    let rando = Math.random().toFixed(1)
    return rando
}

let arrIndex = 0

const button = document.querySelector('#shoot')
body.appendChild(button)
button.addEventListener('click', (event) =>{
    let currentAlien = alienArr[arrIndex]

    if(randomNum() <= human1.accuracy){
        alien1.hull -=5
        console.log('direct hit! ' + alien1.hull)
        if(alien1.hull <= 0){
            createAlien()
            arrIndex +=1
    //     imgDiv.remove()
        }
        if(arrIndex === 5){
            console.log('Humans win!!')
            return
        }
    }else if(randomNum() !== human1.accuracy){
        console.log('We missed, aliens turn')
        if(randomNum() <= alien1.accuracy){
            human1.hull -= alien1.firepower
            console.log(human1.hull)
        }else if(randomNum() !== alien1.accuracy){
            console.log('Aliens missed, Earths turn!')
        }
    }

})




















