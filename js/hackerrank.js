let c = 0;

let content4 = document.getElementById('details4')

let hackerrank = fetch('https://kontests.net/api/v1/hacker_rank')

hackerrank.then((Response)=>{
     return Response.json()
}).then((l4)=>{
     console.log(l4);

     var ihtml4 = `<h3 class="contests_type">${c+1} &nbsp; ${l4[0].name}</h3>
     <p class="contest_time">start: &nbsp; ${l4[0].start_time}</p>
     <p class="contest_time">end: &nbsp;${l4[0].end_time}</p>
     <p class="duration">duration: &nbsp;${l4[0].duration}</p>
     <button class="give"><a href="${l4[0].url}">Try Now</a></button>`
 
    content4.innerHTML = ihtml4;
})

let moveAhead4 = async () =>{

    let response4 = await fetch('https://kontests.net/api/v1/hacker_rank')

    let l4 = await response4.json()
    console.log(c)
    c++;
    if(c>l4.length-1){
        c = 0;
    }

    let ihtml4 = `<h3 class="contests_type">${c+1} &nbsp; ${l4[c].name}</h3>
    <p class="contest_time">start: &nbsp;${l4[c].start_time}</p>
    <p class="contest_time">end: &nbsp;${l4[c].end_time}</p>
    <p class="duration">duration: &nbsp;${l4[c].duration}</p>
    <button class="give"><a href="${l4[c].url}">Try Now</a></button>`

    content4.innerHTML = ihtml4;
} 

let nextQue4 = document.getElementById('next4')

nextQue4.addEventListener('click',moveAhead4)

