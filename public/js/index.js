const send = document.querySelector('label button')
const roomId = document.querySelector('#roomId input')
const username = document.querySelector('#username input')

send.addEventListener('click', async e => {
    if (roomId.value && username.value) {
        await fetch(`/api/room/${roomId.value}/${username.value}`, { method: "GET" }).then(async res => {
            if (res.ok) {
                localStorage.setItem('roomId', roomId.value)
                localStorage.setItem('username', username.value)
                window.open('pages/battle.html', '_self')
            } else if (res.status == 401) window.alert('sala lotada!')
            else window.alert("username already used")
        })
    }
})