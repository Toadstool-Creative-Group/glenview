// Get the modal
const imageModal = document.getElementById("myImageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementsByClassName("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
//pulls 
for(i=0;i< img.length;i++){    
    img[i].onclick = function(){
    imageModal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
 }
}

//Slide show inside modal
let slideIndex = [1,1];
let slideId = ["slide1", "slide2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}




// Get the <span> element that closes the modal
const spanImg = document.getElementsByClassName("closeImg")[0];

// When the user clicks on <span> (x), close the modal
spanImg.onclick = function() {
  imageModal.style.display = "none";
}




//closing modal once clicked outside of modal
// ------------------------why is it not closing clicking the window
window.onclick = function (event) {
    if (event.target == imageModal) {
        imageModal.style.display = "none";
    }
}

