// copy menu for mobile
function copyMenu(){
var dptCategory=document.querySelector('.dpt-cat');
var dptPlace=document.querySelector('.departments');
dptPlace.innerHTML=dptCategory.innerHTML;
// copy inside nav to nav
var mainNav=document.querySelector('.header-nav nav');
var navPlace =document.querySelector('.off-canvas nav');
navPlace.innerHTML=mainNav.innerHTML;
// copy .header-top to .thetop-nav
var topNav=document.querySelector('.header-top .wrapper');
var topPlace=document.querySelector('.off-canvas .thetop-nav');
topPlace.innerHTML=topNav.innerHTML;
}
copyMenu();
//show mobile menu
const menuBtn=document.querySelector('.trigger'),
closeButton=document.querySelector('.t-close'),
addClass=document.querySelector('.site');
menuBtn.addEventListener('click',function(e){
    e.preventDefault()
    addClass.classList.toggle('showmenu')
});
closeButton.addEventListener('click',function(){
    addClass.classList.remove('showmenu')
})

//show submenu mobile
const subMenu=document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu)=>
    menu.addEventListener('click',toggle)
)

function toggle(e){
    
    e.preventDefault();
    subMenu.forEach(item=>item!=this?item.closest('.has-child').classList.remove('expand'):null);
    if(this.closest('.has-child').classList!='expand');
    this.closest('.has-child').classList.toggle('expand');
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
//   show serach
const searcButton=document.querySelector('.t-search'),
tclose=document.querySelector('.search-close'),
showClass=document.querySelector('.site');
searcButton.addEventListener('click',function(){
    showClass.classList.toggle('showsearch')
})
tclose.addEventListener('click',function(){
    showClass.classList.remove('showsearch')
})
// timer

const second =document.querySelector('.trending li:nth-child(5)');
const minute =document.querySelector('.trending li:nth-child(4)');
function reducetimerFxn(){
    let secondsTime=parseInt(second.innerHTML)
    let minutesTime=parseInt(minute.innerHTML)
    
    setInterval(()=>{
        
        second.innerHTML=secondsTime;
        secondsTime+=-1;
        if(secondsTime==0){
                secondsTime=60;
                minute.innerHTML=minutesTime-1;
             }
    },1000);
}
reducetimerFxn()

