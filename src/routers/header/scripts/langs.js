window.addEventListener('DOMContentLoaded', () => {

    let langIcon = document.querySelector(".lang")
    let langsWrapper = document.querySelector('.langsWrapper')

    langIcon.addEventListener('mouseover', showLangsWrapper)
    langIcon.addEventListener('mouseout', hideLangsWrapper)

    function showLangsWrapper() {
        langsWrapper.style.display = 'block'
        langsWrapper.classList.remove('animate__flipOutX')
        langsWrapper.classList.add('animate__flipInX') 
    }

    function hideLangsWrapper() {
        langsWrapper.classList.remove('animate__flipInX')
        langsWrapper.classList.add('animate__flipOutX') 
    }
})