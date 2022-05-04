const searchBar = document.querySelector('.banner-text input');
const searchBox = document.querySelector('.banner-search-box');
searchBar.addEventListener('focus',()=>{
    searchBar.classList.add('active');
    searchBox.classList.add('active');
});
searchBar.addEventListener('blur', ()=>{
    searchBar.classList.remove('active');
    searchBox.classList.remove('active');
});