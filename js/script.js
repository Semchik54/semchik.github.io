var expand = document.querySelector('.brend__expand');
var brendList = document.querySelector('.brend__list');
var expandIcon = document.querySelector('.expand__icon')
var expandText = document.querySelector('.expand__text')

expand.addEventListener("click", (event) => {
    if (brendList.ariaExpanded === 'false') {
        brendList.setAttribute('aria-Expanded', 'true')
        brendList.classList.add("brend__list--expand")   
    } else {
        brendList.setAttribute('aria-Expanded', 'false')
        brendList.classList.remove("brend__list--expand")    
    }
}  
)
expand.addEventListener("click", (event) => {
    if (brendList.ariaExpanded === 'true') {
        expandIcon.classList.add("expand__icon--active")
    } else { 
        expandIcon.classList.remove("expand__icon--active") 
    }  
}

)
expand.addEventListener("click", (event) => {
    if (brendList.ariaExpanded === 'true') {
        expandText.textContent = "Скрыть"
    } else { 
        expandText.textContent = "Показать все"
    }
}

)
window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    resizableSwiper(
      '(max-width: 767px)',
      '.swiper',
      {
        spaceBetween: 15,
        slidesPerView: "auto",
        pagination: {
          el: '.swiper-pagination'
        },
      },
    );
  });
