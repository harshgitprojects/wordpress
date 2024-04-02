///--card project--///
const container= document.querySelector('.container')
const card= document.querySelector('.card')
const h1= document.querySelector('h1')
// for(let i=0; i<59; i++ ){
//     const newcard = card.cloneNode() 
//     container.appendChild(newcard)
// }
let count = 1
card.addEventListener('click', ()=>{
    const newcard = card.cloneNode()
    newcard.innerText = count
    count++ 
    container.appendChild(newcard)
})