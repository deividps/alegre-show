let card = document.getElementsByClassName('attraction')
let iCard = card.length

document.addEventListener('mousemove', e => {
   let ax = (-window.innerWidth / 2 - e.pageX) / 20
   let ay = (window.innerHeight / 2 - e.pageY) / 10
   card.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg);-webkit-transform: rotateY(${ax}deg) rotateX(${ay}deg);-moz-transform: rotateY(${ax}deg) rotateX(${ay}deg)")`
})
