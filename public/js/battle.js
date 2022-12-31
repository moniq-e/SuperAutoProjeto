import './hud.js'

const roomId = localStorage.getItem('roomId')
const username = localStorage.getItem('username')
let time

if (roomId) {
    const grid = document.querySelector('#grid')

    for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
            let div = document.createElement('div')
            div.id = `${x},${y}`
            grid.appendChild(div)
        }
    }

    pingLoop()
} else {
    window.open('../', '_self')
}

async function pingLoop() {
    time = Date.now()
    await fetch(`/api/connection/${roomId}/${username}`, { method: "GET" }).then(async res => {
        if (res.ok) {
            gameLoop(await res.json())
            if (Date.now() - time < 50) {
                setTimeout(pingLoop, 100)
            } else {
                pingLoop()
            }
        } else window.open('../', '_self')
    })
}

/**
 * @param {{user: any, board: any[]}} game 
 */
function gameLoop(game) {
    if (game.board.length) {
        for (const cell of game.board) {
            let div = document.querySelector(`${cell.x},${cell.y}`)
            //mostrar bixos na grid
        }
    }
}