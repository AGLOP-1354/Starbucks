const badgeEl = document.querySelector('header .badges');
const fadeEls = document.querySelectorAll('.visual .fade-in');
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const materialIconsEl = promotionToggleBtn.querySelector('.material-icons');
const toTopEl = document.querySelector('#to-top');
let isHidePromotion = false;



toTopEl.addEventListener('click', () => {
  gsap.to(window, .7,{
    scrollTo: 0
  });
})

scrollEvent();

const scrollEvent = _.throttle(function(){
  if(window.scrollY > 500){
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    })
  }else{
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300);



window.addEventListener('scroll', scrollEvent);

fadeEls.forEach((fadeEl, i) => {
  gsap.to(fadeEl, 1, {
    delay: (i+1) * 0.7,
    opacity: 1,
  });
});

new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay: true,
  loop: true,

});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el : '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});




promotionToggleBtn.addEventListener('click', ()=>{
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion){
    materialIconsEl.innerText = 'keyboard_arrow_down';
    promotionEl.classList.add('hide');
  }else {
    materialIconsEl.innerText = 'keyboard_arrow_up';
    promotionEl.classList.remove('hide');
  }
});

const random = (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const floatingObject = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시

    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
});