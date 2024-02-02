
var cpu_choice = 0;
var cpu_choices = ["stone","paper","scissor"];
var user_choice = -1;
var cpu_score =0;
var user_score=0;


// 0-> stone 1-> paper 2-> scissor

$(".choice").on("click",()=>{
    $(".cpu .img").addClass("moveImages");
    setTimeout(()=>{
        $(".cpu .img").removeClass("moveImages");
        setCpuChoice();
        setScore();
        
    },1000)
 
})


$(".paper").on("click",()=>{
    document.querySelector(".player .img").style.backgroundImage = "url('paper.jpg')";
    $(".player .text").text("PAPER");
    user_choice = 1;

})

$(".rock").on("click",()=>{
    document.querySelector(".player .img").style.backgroundImage = "url('stone.jpg')";
    $(".player .text").text("ROCK");
    user_choice = 0;

})


$(".scissor").on("click",()=>{
    document.querySelector(".player .img").style.backgroundImage = "url('scissor.jpg')";
    $(".player .text").text("SCISSOR");
    user_choice = 2;

})


function setCpuChoice(){
    cpu_choice = Math.floor(Math.random() * 3);
    console.log(cpu_choice);
    if(cpu_choice===0){
        document.querySelector(".cpu .img").style.backgroundImage = "url('stone.jpg')";
        $(".cpu .text").text("ROCK");
    }
    else if (cpu_choice===1){
        document.querySelector(".cpu .img").style.backgroundImage = "url('paper.jpg')";
        $(".cpu .text").text("PAPER");
    }
    else{
        document.querySelector(".cpu .img").style.backgroundImage = "url('scissor.jpg')";
        $(".cpu .text").text("SCISSOR");

    }
    
}

function setScore(){
    user_winning_cond = (user_choice === 0 && cpu_choice ===2) || (user_choice === 1 && cpu_choice ===0) && (user_choice === 2 && cpu_choice ===1);

    if(user_winning_cond){
        user_score++;
    }
    else if(user_choice===cpu_choice){
        alert("draw");
    }
    else{
        cpu_score++;
    }

    $(".userScore").text("USER : "+user_score);
    $(".cpuScore").text("CPU : "+cpu_score);
    
}



