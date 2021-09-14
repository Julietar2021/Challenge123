
var audio = new Audio('zchi.mpeg');
//toppage

function muSic() {

audio.play();
}
//challenge 1



function luvButton() {
    let resultt = Math.floor(Math.random() * 101);
console.log(resultt);

let val1 = document.getElementById("input1").value;
let val2 = document.getElementById("input2").value;

let love1= document.getElementById("lovemessage");
let love2 = document.getElementById("lovepercent");


let erorMsg = document.getElementById("threemsg");


// variable for each id



//error msg

love2.innerHTML = resultt + "%"; 

if (  resultt > 89){
    love1.innerHTML = " Hey " + val1 + ", you and " + val2 + " love eachother like Romeo and Juliet. 🔥 ";
    
    
    }
    else if ( resultt  >69) {
        love1.innerHTML = "Hey " + val1 + ", your love with " + val2 + " is getting strong. ❤️ ";
    
 
    }
    
    else if(resultt > 49) {
        love1.innerHTML = "Hey " + val1 + ", the love between you and " + val2+ " is not strong enough. 😏 ";
       }
     else {
    
        love1.innerHTML = "Hey " + val1 + ", there is no love between you and " + val2 + ".👎🏻 "; 

        
}

if(val1.length <=2 || val2.length<=2)

{
    erorMsg.innerHTML= " Please enter at least 3 characters 😊";
  
    love1.innerHTML ="";
    love2.innerHTML =  ""; 
} else {
    erorMsg.innerHTML= "";
    
}
}





// end of challenge 1

//guest list  challenge 2


function answerr() {
    let answer = document.getElementById("yourage").value;
let message = document.getElementById("msg");




if (answer >= 0) {
    message.innerHTML +=(answer * 365) + " days ";


}
 
 else {
alert(" Please enter number! ");

}

}


function resett() {

    let message = document.getElementById("msg");
message.innerHTML= "Your age in days is";
let answer = document.getElementById("yourage").value = "age here";

}




//end pf challenge 2

// challenge 3





function listButton() {


    let guestNames = ["Juliet Egbule", "Mark Will", "Rouven Bernhartd", ];
    let guestList = document.getElementById("inputt").value;
    let sorrry =document.getElementById("sorry");
    if(guestNames.includes(guestList))
    {
      
    sorrry.innerHTML= " Hello " + guestList + ", You  are welcome to the party. Kindly have your seat.😊";
    
    sorrry.style.color="green";
    }  else {
     
        
    sorry.innerHTML= " Hello " + guestList + ",  your name is not on the list. Have a nice day please.";
  
    alert("you can enter this name (Juliet Egbule) to see how it works for both invited and un-invited guests")
    sorrry.style.color="darksalmon";
    }
    
 
    }
    