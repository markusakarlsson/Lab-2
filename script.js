window.addEventListener('load', loadPage)

/**
 * Starts the two functions when the page loads
 */
function loadPage() {
    textTypingEffectHeroText()
    startImageSlider(6000)
}

/**
 * Starts a loop that displays the header with a typewriter animation
 */
function textTypingEffectHeroText() {
    let i = 0
    const txt = "<h1>Hi, I'm Markus</h1>"
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

let currentImageIndex = 0

/**
 * Starts the image slider
 * @param {Number} interval animation interval in milliseconds
 */
function startImageSlider(interval) {
    setInterval(changeImage, interval)
}

/**
 * Changes the opacity on current and next image
 * to animate the transiation to the next image
 */
function changeImage() {
    const images = document.querySelectorAll('.image-slider-container img')

    images[currentImageIndex].classList.add('image-hidden')

    // Resets value to 0
    currentImageIndex++
    if (currentImageIndex >= images.length) {
         currentImageIndex = 0
    }

    images[currentImageIndex].classList.remove('image-hidden')
}