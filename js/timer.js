
//first initailising the timer
let hour_left = 9
let minute_left = 60
let second_left = 60

// getting the elements where timers to be put

let time = document.getElementsByClassName("show_time")
// creating the function that is going to be called after every second 

function countDown(){
    second_left--
    if(Math.log(second_left)/Math.log(10)<1){
        time[2].innerHTML = 0;
        time[2].innerHTML +=second_left
    }
    else
    time[2].innerHTML= second_left;

    if(second_left==0){
        second_left=60
    }
    if(second_left==59){
        minute_left--
    if(Math.log(minute_left)/Math.log(10)<1){
        time[1].innerHTML = 0;
        time[1].innerHTML +=minute_left
    } 
     else
        time[1].innerHTML=minute_left;

        if(minute_left==0){
            minute_left=60
        }
        else if(minute_left==59){
            hour_left--
            if(hour_left<0){
               // alert('Game Over')
                time[0].innerHTML='00'
                time[1].innerHTML='00'
                time[2].innerHTML='00'
                clearInterval(idOfInterval)
                return
            }
    if(Math.log(hour_left)/Math.log(10)<1){
            time[0].innerHTML = 0;
            time[0].innerHTML+= hour_left
        }
           else
            time[0].innerHTML=hour_left
        }
    }
    
}

// now setting the interval after which the countdown will be called (after every 1 second)

const idOfInterval = setInterval(countDown,1000)