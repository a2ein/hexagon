// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
   // Add a listener for the 'load' event
   window.addEventListener('load', function() {
    // Hide the loader when the page has finished loading
    document.getElementById('loader').style.display = 'none';
});