window.addEventListener('DOMContentLoaded', () => {

    // let langIcon = document.querySelector(".lang")
    let langs = document.querySelector('.langs')
    let langsWrapper = document.querySelector('.langsWrapper')
    let switcher = false

    langsWrapper.addEventListener('mouseover', showLangsWrapper)
    langsWrapper.addEventListener('mouseout', hideLangsWrapper)

    function showLangsWrapper() {
        langs.style.display = 'block'
        langs.classList.remove('animate__flipOutX')
        langs.classList.add('animate__flipInX') 

    }

    function hideLangsWrapper() {
        langs.classList.remove('animate__flipInX') 
        langs.classList.add('animate__flipOutX')
    }  
})