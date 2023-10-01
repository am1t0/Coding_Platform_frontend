let b = 0;

let content3 = document.getElementById('details3')

let codechef = fetch('https://kontests.net/api/v1/code_chef')

codechef.then((Response)=>{
     return Response.json()
}).then((l3)=>{
     console.log(l3);

     var ihtml3 = `<h3 class="contests_type">${b+1} &nbsp; ${l3[0].name}</h3>
     <p class="contest_time">start: &nbsp; ${l3[0].start_time}</p>
     <p class="contest_time">end: &nbsp;${l3[0].end_time}</p>
     <p class="duration">duration: &nbsp;${l3[0].duration}</p>
     <button class="give"><a href="${l3[0].url}">Try Now</a></button>`
 
    content3.innerHTML = ihtml3;
})

let moveAhead3 = async () =>{
    
    let response3 = await fetch('https://kontests.net/api/v1/code_chef')

    let l3 = await response3.json()
    console.log(b)
    b++;
    if(b>l3.length-1){
        b = 0;
   
    }


    let ihtml3 = `<h3 class="contests_type">${b+1} &nbsp; ${l3[b].name}</h3>
    <p class="contest_time">start: &nbsp;${l3[b].start_time}</p>
    <p class="contest_time">end: &nbsp;${l3[b].end_time}</p>
    <p class="duration">duration: &nbsp;${l3[b].duration}</p>
    <button class="give"><a href="${l3[b].url}">Try Now</a></button>`

    content3.innerHTML = ihtml3;
} 

let nextQue3 = document.getElementById('next3')

nextQue3.addEventListener('click',moveAhead3)

