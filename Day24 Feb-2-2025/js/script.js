const accordion = document.querySelectorAll('.accordion');
const ArrAccordion = Array.from(accordion);

ArrAccordion.forEach((item, index) => {
    item.children[0].addEventListener('click', () => {
        ArrAccordion.forEach((e, i) => {
            if (i !== index) {
                e.classList.remove('active');
            }else{
                e.classList.toggle('active');
            }
        })
    });
});