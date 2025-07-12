let compscore=0;
let userscore=0;
let msgjs=document.querySelector(".playbtn");
let userscorejs=document.querySelector("#myscore");
let compscorejs=document.querySelector("#compscore");
let choices=document.querySelectorAll(".box");
const generatechoice=()=>{
    let options=["rock","paper","scissors"];
    let gennum=Math.floor(Math.random()*3);
    return options[gennum];

};
const draw=()=>{
   msgjs.innerText=" This is a draw , Play again ";
   msgjs.style.backgroundColor = "#081b31";
};

const showwinner=(usertakes,comptakes,winnertake)=>{
    if(winnertake)
    {
        userscore++;
        userscorejs.innerText=userscore;
        msgjs.innerText=`User won with ${usertakes} against computers ${comptakes} `;
        msgjs.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorejs.innerText=compscore;
        msgjs.innerText=`Computer won with ${comptakes} against User's ${usertakes} `;
        msgjs.style.backgroundColor="red";
        
    }

};
const playgame=(usertake)=>{
    const comptake=generatechoice();
    let winner=true;
    if(usertake===comptake)
    {
        draw();
    }else{
        if(usertake==="rock")
            {
                winner = comptake === "paper" ? false : true;
            }
            else if(usertake==="paper")
            {
                winner = comptake === "scissors" ? false:true;
            }
            else{
                winner = comptake === "rock" ? false:true;
            }
            showwinner(usertake,comptake,winner);

    }
    
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const usertake=choice.id;
        playgame(usertake);

    });
});