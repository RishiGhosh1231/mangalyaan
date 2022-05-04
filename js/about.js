const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
const customPrevBtn = document.getElementById('left-arrow');
const customNextBtn = document.getElementById('right-arrow');

customPrevBtn.addEventListener('click', function(){
    prevBtn.click();
});
customNextBtn.addEventListener('click', function(){
    nextBtn.click();
});