document.querySelector('#buy').addEventListener('click', e => {
    e.preventDefault()
    const hand = document.querySelector('#hud div')

    if (hand.childElementCount < 7) {
        const newCard = document.createElement('img')
        newCard.className = 'card'
        newCard.src = "../images/cards.png"
        hand.appendChild(newCard)
    }
})