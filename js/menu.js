button = document.querySelector('.burger__menu');
button.addEventListener('click', ()=>{
    button.classList.toggle('active')
    linesContainer = document.querySelector('.lines__container');
    linesContainer.classList.toggle('lines__close_active')
    lines = document.querySelectorAll('.line');
    lines[2].classList.toggle('line__off');
    lines[0].classList.toggle('line_close1');
    lines[1].classList.toggle('line_close2');
    

})