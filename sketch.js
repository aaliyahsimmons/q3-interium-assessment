// this is me trying to code on my own...God have Mercy on my Grade!!
 var a = mouseA;
 var s = mouseS;
 //it didn't work
//  var numbers = [10,25,45,37];
 //var habits =["All","I","Is","An","B","Or","Higher"];


function setup(){
 createCanvas(600,400);
  background(0);
}

function draw(){
 
//for(var a = 0; a < 4; i++){
  // ellipse((a+1)*100,200, numbers[i],numbers[i]);}
   var x = 0;
    while(x<650){
     fill(66,241,244);
     ellipse(x,200,25,25);
     x = x + 50; 
    }
 
 flower(400,300);
 flower(100,300);
 flower(300,200);
 flower(100,300);
 flower(200,300);
 flower(300,100);
 flower(400,300);
 flower(500,300);
  
  if(mouseIsPressed){
    flower(mouseA,mouseS);
  }
  
  
}

function flower(a,s){
   
     //petals
    noStroke();
    fill(66,244,217);
    ellipse(a+10,s-10,35,35);
    ellipse(a+10,s+10,35,35);
    ellipse(a-10,s-10,35,35);
    ellipse(a-10,s+10,35,35);
  
}