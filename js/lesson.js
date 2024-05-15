const tabContentsBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let tabNumber = 0

const hideTabContent = ()=>{
    tabContentsBlocks.forEach(tabCard =>{
        tabCard.style.display = 'none'
    })
    tabs.forEach(tab =>{
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0)=>{
    tabContentsBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
    tabNumber=tabIndex
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab){
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}
const tabContent =()=>{
    setInterval(()=>{
        tabNumber++
        if (tabNumber>tabContentsBlocks.length-1){
            tabNumber=0
        }
        hideTabContent()
        showTabContent(tabNumber)
    },3000)

}
tabContent()