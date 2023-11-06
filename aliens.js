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


const human1 = new Assembly('Carmen')
const human2 = new Assembly('Lucy')
const human3 = new Assembly('Cassidy')
const human4 = new Assembly('Andre')
const humans = [human1, human2, human3, human4]
let humanShips = 4
// console.log(human1)

const alien1 = new Alien('Gorg')
const alien2 = new Alien('Borg')
const alien3 = new Alien('Smorg')
const alien4 = new Alien('Creek')
const aliens = [alien1, alien2, alien3, alien4]
let alienShips = 4
// console.log(alien1)


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

const button = document.querySelector('#shoot')
body.appendChild(button)
button.addEventListener('click', (event) =>{
    if(randomNum() == human1.accuracy){
        alien1.hull -=5
        console.log('direct hit! ' + alien1.hull)
    }else if(randomNum() !== human1.accuracy){
        console.log('We missed, aliens turn')
        if(randomNum() == alien1.accuracy){
            human1.hull -= alien1.firepower
            console.log(human1.hull)
        }else if(randomNum() !== alien1.accuracy){
            console.log('Aliens missed, Earths turn!')
        }
    }

        //     imgDiv.remove()
})





















