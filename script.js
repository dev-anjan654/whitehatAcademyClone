//hamburger menu 
const hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
})
//mobile navigation menu functionality
const navMenu = document.querySelector(".nav-list");
hamburger.addEventListener("click", ()=>{
    navMenu.classList.toggle("active");
})
//fixed header section
const header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        header.classList.add("scrolling");
    }
    else{
        header.classList.remove("scrolling");
    }
})


//slick slider 

$('.feedback-carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '700px',
    responsive: [
      {
        breakpoint: 1681,
        settings: {
          centerPadding: '550px',
        }
      },
      {
        breakpoint: 1441,
        settings: {
          centerPadding: '450px',
        }
      },
      {
        breakpoint: 1367,
        settings: {
          centerPadding: '400px',
        }
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '350px',
        }
      },
      {
        breakpoint: 1025,
        settings: {
          centerPadding: '300px',
        }
      },
      {
        breakpoint: 841,
        settings: {
          centerPadding: '250px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 641,
        settings: {
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 541,
        settings: {
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 421,
        settings: {
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 351,
        settings: {
          centerPadding: '25px',
        }
      },
    ]
  });