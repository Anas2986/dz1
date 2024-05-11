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
let width =449
const moveBlock =()=>{
    childBlock.style.left=`${positionX}px`
    if (positionX<width){
        positionX++
        setTimeout(moveBlock,4)
    }
}
moveBlock()