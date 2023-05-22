const card = document.querySelector('.card');
const contacts = document.querySelector('.card2');
const arrow = document.querySelector('.arrow__down');
const text = document.querySelector('.card__more_text');
card.addEventListener("click", ()=>{
    contacts.classList.toggle('card2__open');
    contacts.classList.remove('card2__off');
    
    card.classList.toggle('card__animation');

    arrow.classList.toggle('arrow__down_off');

    text.classList.toggle('card__more_text_open');
    text.classList.remove('card__more_text_off');


    
    
});