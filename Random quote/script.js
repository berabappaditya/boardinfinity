function daySec(){
let date=new Date();
let hr=date.getHours();
    let tm=document.getElementById("daytm")
        if(hr<5){
          tm.innerText="night";
        }
        else if(hr>=5&&hr<12){
        tm.innerText="morning"; 
        }
        else if(hr==12){
        tm.innerText="noon"; 
        }
        else if(hr>12&&hr<=17){
        tm.innerText="afternoon"; 
        }
        else if(hr>17&&hr<=19){
        tm.innerText="evening"; 
        }
        else{
        tm.innerText="night"; 
        }
    }
daySec()

var button = document.querySelector("button");

button.addEventListener("click", CreateRGB);

function CreateRGB () {
  let rgbColor ="rgb(" + Math.floor(Math.random()*255) + ","
   + Math.floor(Math.random()*255)  + ","
    + Math.floor(Math.random()*255) + ")" ;
  document.body.style.backgroundColor = rgbColor;
  document.getElementById("change").style.backgroundColor=rgbColor;
  document.getElementById("uppermain").style.color=rgbColor;


document.body.style.transition = "all 0.3s ease";

  

let qta=[
  "-Nelson Mandela",
  "-Walt Disney",
  "-Steve Jobs",
  "-Eleanor Roosevelt",
  "-Oprah Winfrey",
  "-James Cameron",
  "-John Lennon",
  "-Mother Teresa",
  "-Franklin D. Roosevelt",
  "-Margaret Mead",
  "-Aristotle"
];
let quoteObj=[
          "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          "The way to get started is to quit talking and begin doing.",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
        "If life were predictable it would cease to be life, and be without flavor.",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "Life is what happens when you're busy making other plans.",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "When you reach the end of your rope, tie a knot in it and hang on.",
        "Always remember that you are absolutely unique. Just like everyone else.",
        "It is during our darkest moments that we must focus to see the light."
];

let r=Math.floor(Math.random() * (10 - 0 + 1)) + 0;
document.getElementById("quote").innerHTML= quoteObj[r];
document.getElementById("writer").innerHTML= qta[r];
console.log(r); 

}


