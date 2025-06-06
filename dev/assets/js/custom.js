const burger = document.querySelector('.btn-burger')
const mobileContainer = document.querySelector('.mobile-container')

function toggleMobileContainer() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('active')
}

burger.addEventListener('click', toggleMobileContainer)

const label = document.querySelectorAll('.label')

label.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.classList.add('hovered')
    })

    item.addEventListener('mouseout', function() {
        item.classList.remove('hovered')
    })
})

const btn = document.querySelectorAll('.btn')

const swiperProduct = new Swiper('.swiper-product', {
    slidesPerView: 4,
    loop: true,
    speed: 500,
    spaceBetween: 48,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
    
        320: {
            slidesPerView: 1,
            spaceBetween: 48,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
        1125: {
            slidesPerView: 3,
            spaceBetween: 48,
        },
        
        1500: {
            slidesPerView: 4,
            spaceBetween: 48,
        }
    }
   
  });

  let swiperEvents;

  function checkMediaQuery() {
      if (window.matchMedia("(min-width: 1025px)").matches) {
          swiperEvents?.destroy();
          swiperEvents = null;
      } else if (!swiperEvents) {
          swiperEvents = new Swiper('.swiper-events', {
              loop: true,
              navigation: {
                  nextEl: '.swiper-events-button-next',
                  prevEl: '.swiper-events-button-prev',
              },
          });
      }
  }
  
  checkMediaQuery();
  window.addEventListener('resize', checkMediaQuery);
  window.addEventListener('orientationchange', () => setTimeout(checkMediaQuery, 300));