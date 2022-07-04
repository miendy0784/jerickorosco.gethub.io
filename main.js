const mobileBtn = document.querySelector('.mobile-btn'), 
      desktopNav = document.querySelector('header'),
      list = document.querySelectorAll('.list');

    //   create function

    closeMobileBtn = () => {
        mobileBtn.classList.remove('active'),
        desktopNav.classList.remove('visible')
    }
    openMobileBtn = () => {
        mobileBtn.classList.add('active'),
        desktopNav.classList.add('visible')
    }


    

    

    // create click event

   mobileBtn.addEventListener('click', function(){
       if(mobileBtn.classList.contains('active')){
           closeMobileBtn()
       }else{
           openMobileBtn()
       }
   });
   desktopNav.addEventListener('click', function(){
           closeMobileBtn()
   });

//    animated on scroll

const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.add("slide-in-from-right", entry.isIntersecting);
    });
  };
  
  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 

  const elements = document.querySelectorAll('.animate');
    elements.forEach(el => {
    observer.observe(el, options);
});
//  the function to work

Array.from(document.getElementsByClassName("path")).forEach(pathElement => {
    pathElement.setAttribute('style', 'stroke-dasharray:'+pathElement.getTotalLength()+';stroke-dashoffset:'+pathElement.getTotalLength())
})

// script for sending forms

const result = document.getElementById('results')
new URLSearchParams(window.location.search).forEach((value, name) => {
    result.append('${name}: ${value}')
    result.append(document.createElement('br'))
})

const loader = document.querySelector('.loader');
const body = document.querySelector('#body');

function init () {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        body.style.display = 'flex';
        setTimeout(() => (body.style,opacity = 1 ), 50);
    }, 4000);
}

init();