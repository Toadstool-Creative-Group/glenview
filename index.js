// Get the modal
var modal = document.getElementById("myModal");
var modalHours = document.getElementById("myModalHours");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnHours = document.getElementById("mobileimagehours");
var btnContactHours = document.getElementById("hid");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btnHours.onclick = function (){
  modalHours.style.display = "block";
}

// This works but need to figure out how to make it appear where the div is, rather than the top of the page
btnContactHours.onclick = function (){
  modalHours.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// Need to figure out why the (x) is not closing out
span.onclick = function() {
  modal.style.display = "none";
  modalHours.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modalHours) {
    modal.style.display = "none";
    modalHours.style.display = "none";
  }
}


// CAROUSEL SECTIONS
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});