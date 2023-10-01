
// -------------btn1 clicked
let btn1 = document.getElementById('next1')

btn1.addEventListener('click',InOut.bind(null,btn1))

// -----------btn2 clicked
let btn2 = document.getElementById('next2')

btn2.addEventListener('click',InOut.bind(null,btn2))


// -----------btn2 clicked
let btn3 = document.getElementById('next3')

btn3.addEventListener('click',InOut.bind(null,btn3))


// -----------btn2 clicked
let btn4 = document.getElementById('next4')

btn4.addEventListener('click',InOut.bind(null,btn4))

function InOut(btn){
    let x = btn;
    x.style.boxShadow='0px 1px 2px'
    x.style.transform='scale(.9)'
    setTimeout(()=>{
        x.style.boxShadow='0px 2px 3px'
        x.style.transform='scale(1)'
    },200)
}