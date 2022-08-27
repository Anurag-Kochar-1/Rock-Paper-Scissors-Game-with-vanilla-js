let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
let userChoiceH1 = document.querySelector("#userChoiceH1")
let computerChoiceH1 = document.querySelector("#computerChoiceH1")
let vs = document.querySelector("#vs")
let wlDiv = document.querySelector("#wlDiv")
let won = document.querySelector("#won")
let lose = document.querySelector("#lose")
let tie = document.querySelector("#tie")
// let resetBtn = document.querySelector("#resetBtn")
let btn = document.querySelector(".btn")
let resetBtnSpan = document.querySelector("#resetBtnSpan")



let userChoice = ''
let computerChoice = ''


function generatingComputerChoice () {
    let random = Math.random()
    if(random < .3) {
        if(computerChoice == ''){
            computerChoice = 'Rock'
        }
    } else if (random > .3 &&  random < .6) {
        if(computerChoice == '') {
            computerChoice = 'Paper'
        }
        
    } else if (random > .6) {
        if(computerChoice == '') {
            computerChoice = 'Scissors'
        }
    }
}

rock.addEventListener("click", function() {
    if(userChoice == '') {
        userChoice = rock.textContent
        console.log(userChoice);
        userChoiceH1.textContent = 'Rock'
        vs.textContent = `VS`

        generatingComputerChoice()
        console.log(computerChoice);
        computerChoiceH1.textContent = computerChoice
        
    }
    
})

paper.addEventListener("click", function() {
    if(userChoice == '') {
        userChoice = paper.textContent
        console.log(userChoice);
        userChoiceH1.textContent = 'Paper'
        vs.textContent = `VS`

        generatingComputerChoice()
        console.log(computerChoice);
        computerChoiceH1.textContent = computerChoice
    }
})

scissors.addEventListener("click", function() {
    if(userChoice == '') {
        userChoice = scissors.textContent
        console.log(userChoice);
        userChoiceH1.textContent = 'Scissors'
        vs.textContent = `VS`

        generatingComputerChoice()
        console.log(computerChoice);
        computerChoiceH1.textContent = computerChoice
    }
})





rock.addEventListener('click', function() {
    if(computerChoice == 'Paper' && won.textContent == '' && lose.textContent == '' && tie.textContent == '') {
        lose.textContent = 'You Lose 😁'
    } else if (computerChoice == 'Scissors' && won.textContent == '' && lose.textContent == '' && tie.textContent == '') {
        won.textContent = 'You Won 🎉'
    } else if(computerChoice == 'Rock' && won.textContent == '' && lose.textContent == '' && tie.textContent == '') {
        tie.textContent = 'TIE ⚡'
    }
})


paper.addEventListener("click", function() {
    if(computerChoice == 'Rock' && won.textContent == '' && lose.textContent == '' && tie.textContent == '') {
        won.textContent = 'You Won 🎉'
    } else if (computerChoice == 'Scissors' && won.textContent == '' && lose.textContent == '' && tie.textContent == '') {
        lose.textContent = 'You Lose 😁'
    } else if(computerChoice == 'Paper' && won.textContent == '' && lose.textContent == '' && tie.textContent == '') {
        tie.textContent = 'TIE ⚡'
    }
})

scissors.addEventListener("click", function () {
    if(computerChoice == 'Rock' && won.textContent == '' && lose.textContent == '' && tie.textContent == '') {
        lose.textContent = 'You Lose 😁'
    } else if (computerChoice == 'Paper' && won.textContent == '' && lose.textContent == '' && tie.textContent == '') {
        won.textContent = 'You Won 🎉'
    } else if(computerChoice == 'Scissors' && won.textContent == '' && lose.textContent == '' && tie.textContent == '') {
        tie.textContent = 'TIE ⚡'
    }
})



function creatingResetBtn () {
    if(computerChoice == '') {
        const resetBtn = document.createElement('button')
        resetBtn.className = 'resetButton'
        resetBtn.textContent = 'Reset Game'
        // resetBtn.onclick = 
        resetBtnSpan.append(resetBtn)


        // resetBtn.style.padding = '20px'
}

   
} 

function reloadPage() {
    window.location.reload(true)
}

