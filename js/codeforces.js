
let ind = 0;

let content = document.getElementById('details1')


let codeforces = fetch('https://kontests.net/api/v1/codeforces');

codeforces.then((response)=>{
       return response.json()
}).then((List)=>{
     console.log(List)

     var ihtml = ` <h3 class="contests_type">${ind+1} &nbsp; ${List[0].name}</h3>
     <p class="contest_time">start: &nbsp; ${List[0].start_time}</p>
     <p class="contest_time">end: &nbsp;${List[0].end_time}</p>
     <p class="duration">duration: &nbsp;${List[0].duration}</p>
     <button class="give"><a href="${List[0].url}">Try Now</a></button>`
 
     content.innerHTML = ihtml;
})

let moveAhead = async () =>{
    
     let response = await fetch('https://kontests.net/api/v1/codeforces')
     
     ind++;
     let list = await response.json()
     console.log(ind)
     if(ind>list.length-1){
     ind = 0;
     }

    let ihtml = `<h3 class="contests_type">${ind+1} &nbsp; ${list[ind].name}</h3>
    <p class="contest_time">start: &nbsp;${list[ind].start_time}</p>
    <p class="contest_time">end: &nbsp;${list[ind].end_time}</p>
    <p class="duration">duration: &nbsp;${list[ind].duration}</p>
    <button class="give"><a href="${list[ind].url}">Try Now</a></button>`

    content.innerHTML = ihtml;
     
}

let nextQue = document.getElementById('next1')

nextQue.addEventListener('click',moveAhead)