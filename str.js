let frame1=document.querySelector(".frame1");
let frame2=document.querySelector(".frame2");
let btn=document.querySelector(".btn1");
let parent=document.querySelector(".parent");
let stone=document.querySelector(".stone");
let paper=document.querySelector(".paper");
let cut=document.querySelector(".sessior");
let span2=document.querySelector(".span2")
let span3=document.querySelector(".span3")
 function start(){
    let name1=  prompt("Enter Player Name");
    let name2= prompt("M or F");
    if(name2=="M"||name2=="m"){frame1.style.backgroundImage='url("boy.jpeg")';}
    else{frame1.style.backgroundImage=='url("girl.jpg")'};
    let name=document.querySelector(".name");
    name.innerText=name1;
    setTimeout(start1,1)
}
let start1= function(){
    let span1=document.querySelector(".span1");
    span1.classList.add("img1");
}
// let choose=function(){
//     let generate=Math.floor(Math.random()*3)+1;
//     if(generate==1){frame1.style.backgroundImage='url("stone.jpeg")';btn.innerText='Again'}
//     else if(generate==2){frame1.style.backgroundImage='url("paper.jpeg")';btn.innerText='Again'}
//     else{frame1.style.backgroundImage='url("secissors.jpeg")';btn.innerText='Again'};    
// }

// let choose1=function(){
//     let generate1=Math.floor(Math.random()*3)+1;
//     if(generate1==1){frame2.style.backgroundImage='url("stone.jpeg")';}
//     else if(generate1==2){frame2.style.backgroundImage='url("paper.jpeg")';}
//     else{frame2.style.backgroundImage='url("secissors.jpeg")';};    
// }
let choose=function(){
    let generate=Math.floor(Math.random()*3)+1;
    let generate1=Math.floor(Math.random()*3)+1;
    if(generate==1){frame1.style.backgroundImage='url("stone.jpeg")';btn.innerText='Again'}
    else if(generate==2){frame1.style.backgroundImage='url("paper.jpeg")';btn.innerText='Again'}
    else{frame1.style.backgroundImage='url("secissors.jpeg")';btn.innerText='Again'};  

    if(generate1==1){frame2.style.backgroundImage='url("stone.jpeg")';}
    else if(generate1==2){frame2.style.backgroundImage='url("paper.jpeg")';}
    else{frame2.style.backgroundImage='url("secissors.jpeg")';};
    // console.log(generate,generate1);
    if(generate==generate1){alert("Draw")}
    else{
        if(generate==1&&generate1==3){span2.style.display='block',setTimeout(() => {
            span2.style.display='none'
        }, 1000);}
        else if(generate==2&&generate1==1){span2.style.display='block',setTimeout(() => {
            span2.style.display='none'
        }, 1000);}
        else if(generate==3&&generate1==2){span2.style.display='block',setTimeout(() => {
            span2.style.display='none'
        }, 1000);}
        else{span3.style.display='block',setTimeout(() => {
            span3.style.display='none'
        }, 1000);}
    }
   
    
}
btn.addEventListener("click",function(){choose();})


start();
