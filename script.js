function changeWallpaper(a){
    if(a==1){
        naruto();
    }else if(a==4){
        madara();
    }else if(a==2){
        sasuke();
    }else if(a==3){
        itachi();
    }else if(a==5){
        jiraya();
    }else if(a==6){
        obito();
    }else if(a==7){
        
        nagato();
    }else if(a==8){
        minato();
    }else if(a==9){
        orochi();
    }else if(a==10){
        sakura();
    }else if(a==11){
        onoki();
    }
}



function naruto(){
    console.log(1)
    let a=document.querySelector("#people");
    a.style.backgroundImage="url(Photos/naruto.jpeg)";
    a.style.display="block";
    let b=document.querySelector(".center");
    b.style.float="left";
    b.innerHTML=`<p><q>Hard work is worthless for those that don’t believe in themselves. </q>– Naruto Uzumaki</p>`
    b.style.color="black";

    
}

function madara(){
    let a=document.querySelector("#people");
    a.style.backgroundImage = "url(Photos/madara.jpeg)";
    a.style.display="block";
    let b=document.querySelector(".center");
    b.style.float="right";
    b.innerHTML=`<p><q>Balance is what keeps the world going. </q>– Uchiha Madara</p>`
    b.style.color="black";
   
}

function itachi(){
    let a=document.querySelector("#people");
    a.style.backgroundImage = "url(Photos/itachi.jpeg)";
    a.style.display="block";
    let b=document.querySelector(".center");
    b.style.float="right";
    b.innerHTML=`<p><q>It is foolish to fear what we have yet to see and know.</q>– Uchiha Itachi</p>`
    b.style.color="black";


}
function sasuke(){
    let a=document.querySelector("#people");
    a.style.backgroundImage = "url(Photos/sasuke.jpeg)";
    a.style.display="block";
  let b=document.querySelector(".center");
    b.style.float="left";
    b.innerHTML=`<p><q>This is the path I walk. Not you or anyone can change that. </q>– Uchiha Sasuke</p>`
    b.style.color="black";
}

function jiraya(){
    let a=document.querySelector("#people");
    a.style.backgroundImage = "url(Photos/jiraya.jpeg)";
    a.style.display="block";
  let b=document.querySelector(".center");
    b.style.float="left";
    b.innerHTML=`<p><q>A tale is only good as it's final turn of events. A plot twist. And mistakes are important part of a plot, too.</q>– Jiraya</p>`
    b.style.color="black";
    
}
function minato(){
    let a=document.querySelector("#people");
    a.style.backgroundImage = "url(Photos/minato.jpeg)";
    a.style.display="block";
  let b=document.querySelector(".center");
    b.style.float="left";
    b.innerHTML=`<p><q>If a man hasn’t discovered something that he will die for, he isn’t fit to live.</q>– Minato Namikaze</p>`;
    b.style.float="right";
    b.style.color="white";
    
}
function obito(){
    let a=document.querySelector("#people");
    a.style.backgroundImage = "url(Photos/obito.jpeg)";
    a.style.display="block";
  let b=document.querySelector(".center");
    b.style.float="left";
    b.innerHTML=`<p><q>The moment people come to know love, they run the risk of carrying hate.</q>– Uchiha Obito</p>`;
    b.style.float="right";
    b.style.fontSize="2.5rem";
    
}

function orochi(){
    let a=document.querySelector("#people");
    a.style.backgroundImage = "url(Photos/orochimaru.jpeg)";
    a.style.display="block";
  let b=document.querySelector(".center");
    b.style.float="left";
    b.innerHTML=`<p><q>It's Human nature not to realize something,unless they lose it</q>– Orochimaru</p>`;
    b.style.float="right";
    
}

function onoki(){
    let a=document.querySelector("#people");
    a.style.backgroundImage = "url(Photos/onoiki.jpeg)";
    a.style.display="block";
  let b=document.querySelector(".center");
    b.style.float="left";
    b.innerHTML=`<p><q>Never give up without even trying. Do what you can, no matter how small the effect it may have!</q>– Onoki</p>`;
    b.style.float="right";
    
}

function sakura(){
    let a=document.querySelector("#people");
    a.style.backgroundImage = "url(Photos/sakura.jpeg)";
    a.style.display="block";
  let b=document.querySelector(".center");
    b.style.float="left";
    b.innerHTML=`<p><q>Every one of us must do what’s in their power! If we’re going to die anyway, then it’s better to die fighting than to do nothing!</q>– Haruna Sakura</p>`;
    b.style.float="left";
    b.style.color="black";
}


function nagato(){
    let a=document.querySelector("#people");
    a.style.backgroundImage = "url(Photos/nagato.jpeg)";
    a.style.display="block";
  let b=document.querySelector(".center");
    b.style.float="left";
    b.innerHTML=`<p><q>If you don’t share someone’s pain, you can never understand them.</q>– Nagato</p>`;
    b.style.float="right";
    b.style.fontSize="2.5rem";
    b.style.color="white";
}
