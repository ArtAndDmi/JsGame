
function start() {
    document.getElementById('header').innerHTML = 'Try to escape the Python'
    document.getElementById('score').innerHTML = '000'
    const player = document.getElementById('player')
    const python = document.getElementById('python')
    let score = 0


    css(python, { animation: 'pythonMove 1.5s infinite linear' })

    document.addEventListener('keydown', function (event) {
        jump()

    })


    const isAlive = setInterval(function () {
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
        let pythonLeft = parseInt(window.getComputedStyle(python).getPropertyValue('left'))

        if (pythonLeft < 66 && pythonLeft > 20 && playerTop >= 40) {
            gameOver(python, scoreCounter, isAlive)
        }


    }, 10)

    let scoreCounter = setInterval(function () {
        score++
        document.getElementById('score').innerHTML = score / 100
        if (pythonLeft < 66 && pythonLeft > 20 && playerTop >= 40) {
        }

    }, 10)
}

function jump() {
    if (player.classList != 'jump') {
        player.classList.add('jump')
    }
    setTimeout(function () {
        player.classList.remove('jump')
    }, 300)
}

function gameOver(enemy, ...internival) {
    clearInterval(internival[0])
    clearInterval(internival[1])

    document.getElementById('header').innerHTML = "oh shit... now u're pythonist"
    css(enemy, { animation: 'none' })
    setTimeout(function () {
        start()
    }, 3000)

}

function css(el, styles = {}) {
    Object.assign(el.style, styles)
}

start()


