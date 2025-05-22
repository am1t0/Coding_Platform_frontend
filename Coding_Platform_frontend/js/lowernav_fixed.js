let Upper = document.getElementsByClassName("uppernav")[0];
// console.log(Upper);

function isUpperNavVisible(el){

    const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
            );
}

function checkUppernav(){

if(!isUpperNavVisible(Upper)){

 const fixLow = document.getElementsByClassName("lowernav")[0];
 fixLow.style.position="sticky";
 fixLow.style.top=0;
  }
}
window.addEventListener('scroll',checkUppernav);