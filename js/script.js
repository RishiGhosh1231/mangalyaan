// Navbar
let togglenavBtn = document.getElementById('menu');
const toggleNav = document.querySelector('.toggle-nav');
const navCloseBtn = document.querySelector('.close-btn');

togglenavBtn.addEventListener('click', () => {
	togglenavBtn.classList.toggle('open');
    toggleNav.classList.toggle('active');
});
document.querySelector('.outer-body').addEventListener('click',function(){
    if(toggleNav.classList.contains('active')){
        toggleNav.classList.remove('active');
        if(togglenavBtn.classList.contains('open')){
            togglenavBtn.classList.remove('open');
        }
    }
});

// Banner


// News Section
const newsItems = document.querySelectorAll('.news-tab');
for(let i = 0; i < newsItems.length; i++){
    newsItems[i].addEventListener('mouseover', function(){
        this.style.zIndex = '10';
    });
    newsItems[i].addEventListener('mouseout', function(){
        this.style.zIndex = '0';
    });
}

// Mission Monitor
const monitorText = document.querySelectorAll('.m-monitor-item h5');
const monitorImg = document.querySelectorAll('.monitor-img');
console.log(monitorText);

for(let i = 0; i < monitorText.length; i++){
    monitorText[i].addEventListener('click', function(){
        for(let j = 0; j < monitorText.length; j++){
            monitorText[j].classList.remove('active');
        }
        const id = this.getAttribute('data-id');
        this.classList.add('active');
        for(let u = 0; u < monitorImg.length; u++){
            monitorImg[u].classList.remove('active');
        }
        monitorImg[id].classList.add('active');
    });
}

// Spacecraft Page Inspiration Section
const inspireItem = document.querySelectorAll('.inspire-item');

for(let i = 0; i < inspireItem.length; i++){
    inspireItem[i].addEventListener('click', function(){
        for(let j = 0; j < inspireItem.length; j++){
            inspireItem[j].classList.remove('active');
        }
        this.classList.add('active');
    });
}

// Missions Page
var a = 0;
$(window).scroll(function() {

  var oTop = $('.mission-01-stat').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.mission-stat-number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    a = 1;
  }

});
