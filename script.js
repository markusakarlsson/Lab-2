window.addEventListener('load', loadPage)

/**
 * 
 */
function loadPage() {
    textTypingEffectHeroText()
}

/**
 * Starts a loop that displays the header with a typewriter animation
 */
function textTypingEffectHeroText() {
    let i = 0
    const txt = "<h1>Hi, I'm Markus Karlsson</h1>"
    const speed = 140
    const element = document.getElementById("welcome-text")
    const interval = setInterval(addCharacter, speed)

    function addCharacter() {
        if (i < txt.length) {
            element.innerHTML += txt.charAt(i)
            i++
        } else {
            clearInterval(interval)
        }
    }
}
