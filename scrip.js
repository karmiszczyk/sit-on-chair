 document.addEventListener("DOMContentLoaded", function(){
    var images = document.querySelectorAll('.slider li');

    var prevButton = document.getElementById('arrow-right');
    var nextButton = document.getElementById('arrow-left');

    var currentImageIndex = 0;

    images[currentImageIndex].style.display = "inline-block";

    nextButton.addEventListener('click', showNextImg);
    prevButton.addEventListener('click', showPreviousImg);

function showNextImg(){
   if(isOnLastImage(currentImageIndex))
   {
       hideImageOnIndex(currentImageIndex);
       currentImageIndex = 0;
       showImageOnIndex(currentImageIndex);
       return;
   }

   hideImageOnIndex(currentImageIndex);
   currentImageIndex++;
   showImageOnIndex(currentImageIndex);
}

function showPreviousImg(){
   if(isOnFirstImage(currentImageIndex))
   {
       hideImageOnIndex(currentImageIndex);
       currentImageIndex = images.length - 1;
       showImageOnIndex(currentImageIndex);
       return;
   }

   hideImageOnIndex(currentImageIndex);
   currentImageIndex--;
   showImageOnIndex(currentImageIndex);
}

function showImageOnIndex(index) {
    images[currentImageIndex].style.display = "inline-block";
}

function hideImageOnIndex(index) {
    images[currentImageIndex].style.display = "none";
}

function isOnLastImage(index) {
    return currentImageIndex == images.length - 1;
}
function isOnFirstImage(index) {
    return currentImageIndex == 0;
}

});

function onChairOver(element){
    element.getElementsByClassName("box")[0].style="display:none";
}
function onChairOut(element){
    element.getElementsByClassName("box")[0].style="display:inline-block";
}
