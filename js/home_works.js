const gmailImput =document.querySelector('#gmail_input')
const gmailBtn =document.querySelector('#gmail_button')
const gmailResult =document.querySelector('#gmail_result')

const regExp =/^\w[0-9a-z._-]+@gmail.com/i
gmailBtn.onclick=()=>{
    if (regExp.test(gmailImput.value)){
        gmailResult.innerHTML='Good'
        gmailResult.style.color='green'
    }else {
        gmailResult.innerHTML='error'
        gmailResult.style.color='red'
    }
}

const childBlock =document.querySelector('.child_block')
let positionX =0
let positionY =0
let width =449
const moveBlock =()=>{
    childBlock.style.left=`${positionX}px`
    childBlock.style.top=`${positionY}px`
    if (positionX<width && positionY===0){
        positionX++
        setTimeout(moveBlock,4)
    }else if (positionX===width && positionY<width){
        positionY++
        setTimeout(moveBlock,4)
    }else if (positionY===width && positionX !==0){
        positionX--
        setTimeout(moveBlock,4)
    }else if (positionX ===0 && positionY !==0){
        positionY--
        setTimeout(moveBlock,4)
    }
}
moveBlock()
const stopButton =document.querySelector('#stop')
const startButton =document.querySelector('#start')
const resetButton =document.querySelector('#reset')
const secondsButton =document.querySelector('#seconds')

let count =0
let interval ;
let timerRunning=false

startButton.onclick=()=>{
    if (timerRunning===false){
        interval=setInterval(()=>{
            count++
            secondsButton.textContent=count
        },1000)
        timerRunning = true
    }
}

stopButton.onclick=()=>{
    clearInterval(interval )
    timerRunning = false
}
resetButton.onclick=() =>{
    clearInterval(interval)
    count= 0
    secondsButton.textContent=count
    timerRunning= false
}
