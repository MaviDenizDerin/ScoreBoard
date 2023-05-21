let scoreOneEl = document.getElementById("score1-el")
let scoreTwoEl = document.getElementById("score2-el")

let score1= 0
let score2= 0

function addOne(){
    
    score1+= 1
    scoreOneEl.textContent=score1
}
 
 function addTwo(){
    
    score1+= 2
    scoreOneEl.textContent=score1
}

 function addThree(){
    
    score1+= 3
    scoreOneEl.textContent=score1
}

function addOneTwo(){
    
    score2+= 1
    scoreTwoEl.textContent=score2
}
 
function addTwoTwo(){
    
    score2+= 2
    scoreTwoEl.textContent=score2
}
function addThreeTwo(){
    
    score2+= 3
    scoreTwoEl.textContent=score2
}