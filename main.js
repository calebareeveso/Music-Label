//  made by caleb Areeveso [@dope] 

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



var slideIndexx = 1;
showSlide(slideIndexx);

function plusSlidess(n) {
  showSlide(slideIndexx += n);
}

function currentSlidee(n) {
  showSlide(slideIndexx = n);
}

function showSlide(n) {


  var i;
  var slide = document.getElementsByClassName("mySlides2");
  // slideIndex++;
  // if (slideIndex > slides.length) {slideIndex = 1}  
  if (n > slide.length) {slideIndexx = 1}    
  if (n < 1) {slideIndexx = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";  
  }
  slide[slideIndexx-1].style.display = "block";  

  // setTimeout(showSlides, 2000); 

}
setTimeout(function myload(){  document.querySelector(".overlay").style.transform = "translateY(-100%)";
myfunction();
},2000);



//  a.setAttribute("class", "select-selected");


  function myfunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "shows";
  

    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);

  }

    
    const arr = document.getElementById("arrow");
    arr.addEventListener("click",()=>{
      const nav = document.getElementById("nav");
      const arrup = document.getElementById("arrup");
      const arrdown = document.getElementById("arrdown");
      arr.classList.toggle("change-2");
      nav.classList.toggle("change");
      arrup.classList.toggle("change-3");
      arrdown.classList.toggle("change-4");
    });

    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.classList.add("smoothbtn")
      } else {
        mybutton.classList.remove("smoothbtn")
      }
    }
    
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    