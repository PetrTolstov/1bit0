window.addEventListener('DOMContentLoaded', () => {

    // let langIcon = document.querySelector(".lang")
    let langs = document.querySelector('.langs')
    let langsWrapper = document.querySelector('.langsWrapper')


    langsWrapper.addEventListener('mouseenter', showLangsWrapper)
    langsWrapper.addEventListener('mouseleave', hideLangsWrapper)

    function showLangsWrapper() {
        langs.style.display = 'block'
        langs.classList.remove('animate__flipOutX')
        langs.classList.add('animate__flipInX') 

    }

    function hideLangsWrapper() {
        langs.classList.remove('animate__flipInX') 
        langs.classList.add('animate__flipOutX')
        window.setTimeout(() => langs.style.display = "none", "750" )

    }  
})