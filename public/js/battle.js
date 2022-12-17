const roomId = localStorage.getItem('roomId')
const username = localStorage.getItem('username')
let time

if (roomId) {
    pingLoop()
} else {
    window.open('../', '_self')
}

async function pingLoop() {
    time = Date.now()
    await fetch(`/api/connection/${roomId}/${username}`, { method: "GET" }).then(res => {
        if (res.ok) {
            if (Date.now() - time < 50) {
                setTimeout(pingLoop, 100)
            } else {
                pingLoop()
            }
        } else window.open('../', '_self')
    })
}