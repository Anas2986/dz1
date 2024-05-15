const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = ()=>{
    modal.style.display = 'block'
    document.body.overflow = 'hidden'
}

const closeModal = () =>{
    modal.style.display = 'none'
    document.body.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal){
        closeModal()
    }
}


const openApp =()=>{
    return window.innerHeight+window.scrollY>=document.documentElement.scrollHeight
}

const callApp =()=>{
    if (openApp()){
        openModal()
        window.removeEventListener('scroll',callApp)
    }

}
window.addEventListener('scroll',callApp)

setTimeout(openModal,10000)