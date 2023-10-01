let a = 0;

let content2 = document.getElementById('details2')

let leetcode = fetch('https://kontests.net/api/v1/leet_code')

leetcode.then((Response)=>{
     return Response.json()
}).then((l2)=>{
     console.log(l2);

     var ihtml2 = `<h3 class="contests_type">${a+1} &nbsp; ${l2[0].name}</h3>
     <p class="contest_time">start: &nbsp; ${l2[0].start_time}</p>
     <p class="contest_time">end: &nbsp;${l2[0].end_time}</p>
     <p class="duration">duration: &nbsp;${l2[0].duration}</p>
     <button class="give"><a href="${l2[0].url}">Try Now</a></button>`
 
    content2.innerHTML = ihtml2;
})

let moveAhead2 = async () =>{

    let response2 = await fetch('https://kontests.net/api/v1/leet_code')

    let l2 = await response2.json()
    console.log(a)
    a++;
    if(a>l2.length-1){
        a = 0;

    }

    let ihtml2 = `<h3 class="contests_type">${a+1} &nbsp; ${l2[a].name}</h3>
    <p class="contest_time">start: &nbsp;${l2[a].start_time}</p>
    <p class="contest_time">end: &nbsp;${l2[a].end_time}</p>
    <p class="duration">duration: &nbsp;${l2[a].duration}</p>
    <button class="give"><a href="${l2[a].url}">Try Now</a></button>`

    content2.innerHTML = ihtml2;
} 

let nextQue2 = document.getElementById('next2')

nextQue2.addEventListener('click',moveAhead2)

