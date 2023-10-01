//accessing elements 
let L_R = document.getElementById("ide");

let R_L = document.getElementById("corrs_img");

//checking if they are in viewport
function isElementInViewport(el,offset = 1){

    const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)

                // rect.top - offset <=
                // (window.innerHeight || document.documentElement.clientHeight)
            );
}

//if element L_R and R_L is in the viewport then what to do

function scrollSlide(){
if(isElementInViewport(L_R)){
    L_R.classList.add("animate2");
    L_R.getElementsByTagName("img")[0].style.visibility="visible";
}
else{

}
if(isElementInViewport(R_L)){
    R_L.classList.add("animate1");
    R_L.getElementsByTagName("img")[0].style.visibility="visible";

}
else{
    
}
}
window.addEventListener('scroll',scrollSlide);
