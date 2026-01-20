// let div1=document.querySelector(".box #box1");
// let div2=document.querySelector(".box #box2");
// let div3=document.querySelector(".box #box3");
// let div4=document.querySelector(".box #box4");
// let div5=document.querySelector(".box #box5");
// let div6=document.querySelector(".box #box6");
// let div7=document.querySelector(".box #box7");
// let div8=document.querySelector(".box #box8");
// let div9=document.querySelector(".box #box9");
// let div10=document.querySelector(".box #box10");
// let btn=document.querySelector(".btn");
// let flashArr=["box1","box2","box3","box4","box5","box6","box7","box8","box9","box10"]

// let arr=[];
// function randomNo(n){
//     for(let i=1;i<=n;i++){
//         let rand= Math.floor(Math.random()*10);
//         arr.push(rand);
//     }
// }
// btn.addEventListener("click",()=>{
// randomNo(7);
// let arr2=arr.filter((el,index,arr)=>
//     (arr.indexOf(el)==index)
// )

// for(let el of arr2){
//     for(i=0;i<10;i++){
//              if(flashArr[el]==divs[i].attributes[1].nodeValue){
//         console.dir(divs[i])
//         divs[i].classList.add("flash");
//        }
//     }
//     setTimeout(()=>{
//         for(i=0;i<10;i++){
//           divs[i].classList.remove("flash");
//         }
//     },200)
// }

//another method for efficiency
// for (let i = 0; i < divs.length; i++) {
//     if (arr2.some(el => flashArr[el] === divs[i].getAttribute("id"))) {
//         divs[i].classList.add("flash");
//     }
// }

// setTimeout(() => {
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].classList.remove("flash");
//     }
// }, 200);

let started=false;
let score=0;
let arr=[];
let arr2=[];
let userArr=[];
let boxName=[];
let divs = document.querySelectorAll(".box [id^='box']");
let [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10,div11,div12,div13,div14] = divs;
let btn=document.querySelector(".btn");
let flashArr=["box1","box2","box3","box4","box5","box6","box7","box8","box9","box10","box11","box12","box13","box14"];
let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
let body=document.querySelector("body");


function removeClass(){
    setTimeout(() => {
    divs.forEach(div => div.classList.remove("flash"));
}, 400);
}
function randomNo(n){
    for(let i=1;i<=n;i++){
        let rand= Math.floor(Math.random()*14);
        arr.push(rand);
    }
}
function gameEnd(){
    arr=[];
    userArr=[];
    boxName=[];
    started=false;
}
let glow=()=>{
        started=true;
        h2.innerText=`your score is:${score}`;
        h1.innerText="all the best"
        randomNo(4);
    arr2=arr.filter((el,index,arr)=>arr.indexOf(el)==index);
    boxName=arr2.map(el => flashArr[el]);
    const matchSet = new Set(boxName);
    divs.forEach(div => {
        if (matchSet.has(div.id)) {
            div.classList.add("flash");
        }
    });
  removeClass();
  arr=[];
  btn.style.display="none";
}


btn.addEventListener("click",glow)


divs.forEach(div=>{
    div.addEventListener("click",()=>{
        if(started==true){
            const matchSet = new Set(boxName);
         if (matchSet.has(div.id)) {
            userArr.push(div.id);
        div.classList.add("flash");
        if(userArr.length==boxName.length){
            setTimeout(glow,800)
            h1.innerText="you have clicked all boxes in correct sequence";
            score++;
            h2.innerText=`your score is ${score}`;
            gameEnd();
            removeClass();
        }
        }else{
            removeClass();
            body.classList.add("red");
            setTimeout(()=>{
                body.classList.remove("red");
            },400)
            h2.innerText=`your score is:${score}`;
            score=0;
            gameEnd();
            h1.innerText="you have clicked wrong box! click restart to play again";
            btn.style.display="block";
            btn.innerText="restart" 
        }
      }
   })
})

