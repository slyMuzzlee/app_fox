var accordionBtns = document.getElementsByClassName("info_questions_btn-accordion");

for (let i = 0; i < accordionBtns.length; i++) {
    const element = accordionBtns[i];
    element.onclick = function () {
        for (let k = 0; k < accordionBtns.length; k++) {
            const element = accordionBtns[k];
            element.classList.remove('active')
            
        }
        element.classList.add('active')
    }
    
}