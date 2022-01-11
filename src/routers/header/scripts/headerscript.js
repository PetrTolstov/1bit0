var COLORS_LIST = {
    "main" : ["#497DE7", "rgba(80, 138, 254, 0.3)", "rgba(66, 113, 208, 0.5)", "rgba(66, 113, 208, 0.2)", "rgba(66, 113, 208, 0.2)", "rgba(80, 138, 254, 0.9)", "rgba(66, 113, 208, 0.9)"],
    "constructor" : ["#5225B3", "rgba(90, 41, 197, 0.3)", "rgba(74, 33, 161, 0.5)", "rgba(74, 33, 161, 0.2)", "rgba(74, 33, 161, 0.2)", "rgba(90, 41, 197, 0.9)", "rgba(74, 33, 161, 0.9)"],
    "ourworks" : ["#002A7C", "rgba(0, 46, 136, 0.3)", "rgba(0, 38, 112, 0.5)", "rgba(0, 38, 112, 0.2)", "rgba(0, 38, 112, 0.2)", "rgba(0, 46, 136, 0.9)", "rgba(0, 38, 112, 0.9)"],
    "aboutus" : ["#5EDCBE", "rgba(103, 242, 209, 0.3)", "rgba(85, 198, 171, 0.5)", "rgba(85, 198, 171, 0.2)", "rgba(85, 198, 171, 0.2)", "rgba(103, 242, 209, 0.9)", "rgba(85, 198, 171, 0.9)"],
    "curses" : ["#27CE7E", "rgba(43, 227, 139, 0.3)", "rgba(35, 185, 113, 0.5)", "rgba(35, 185, 113, 0.2)", "rgba(35, 185, 113, 0.2)", "rgba(43, 227, 139, 0.9)", "rgba(35, 185, 113, 0.9)"]
}

function ready() {
    let navA = [...document.getElementsByClassName("navA")]
    navA.forEach(element => {
        element.addEventListener("click", animateA)
    })
}

function animateA(){
    document.getElementsByClassName("active")[0].classList.remove('active');

    this.classList.add('active');
    document.documentElement.style.setProperty('--var-maincolor', COLORS_LIST[this.id][0]);
    document.documentElement.style.setProperty('--firstShadow', COLORS_LIST[this.id][1]);
    document.documentElement.style.setProperty('--secondShadow', COLORS_LIST[this.id][2]);
    document.documentElement.style.setProperty('--thirdShadow', COLORS_LIST[this.id][3]);
    document.documentElement.style.setProperty('--thouthShadow', COLORS_LIST[this.id][4]);
    document.documentElement.style.setProperty('--fifthShadow', COLORS_LIST[this.id][5]);
    document.documentElement.style.setProperty('--sixthShadow', COLORS_LIST[this.id][6]);

}

document.addEventListener("DOMContentLoaded", ready);
