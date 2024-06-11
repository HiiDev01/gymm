const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector(".navList");
hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});
document.querySelectorAll('.navLinks').forEach(link =>
   link.addEventListener('click',()=>{
    hamburger.classList.remove('active');
    navList.classList.remove('active');
}));
//////////////////////////////////////////
var  slideIndex = 1;
showSlide(slideIndex);
var slideInterval;


function plusSlide(n){
  clearInterval(slideInterval); //clear interval when manually change slide
  showSlide(slideIndex += n);
}

function currentSlide(n){
  clearInterval(slideInterval);
  showSlide(slideIndex = n);
}

function showSlide(n){
  var i;
  var mySlide = document.querySelectorAll('.my-slider');
  var dots = document.querySelectorAll('.dot');

  if(n > mySlide.length){slideIndex = 1;}
  if(n < 1){slideIndex = mySlide.length}
  for(i=0; i <mySlide.length; i++){
    mySlide[i].style.display = "none";
  }

  for(i=0; i<dots.length; i++){
    dots[i].classList.remove("active");
  }
  mySlide[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add('active');
}

// autoslide
function autoSlide(){
  var mySlide = document.querySelectorAll('.my-slider');
  slideInterval = setInterval(function(){
    showSlide(slideIndex +=1);
    if(slideIndex > mySlide.length){slideIndex = 1;}
  }, 6000);
}
autoSlide(); //start autoslide intially

//pause autoslide
document.querySelector('.slider').addEventListener('mouseover', function(){
  clearInterval(slideInterval);
});

document.querySelector('.slider').addEventListener("mouseout", function(){
autoSlide();
});

