// Get the modal
const imageModal = document.getElementById("myImageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementsByClassName("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementsByClassName("caption");
// img.onclick = function(){
//   imageModal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
for(i=0;i< img.length;i++){    
    img[i].onclick = function(){
    imageModal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
 }
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
