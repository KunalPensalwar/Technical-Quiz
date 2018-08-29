function check(){
    var  message, x;
    message = document.getElementById("number");
    message.innerHTML = "";
    x = document.getElementById("limit").value;
    console.log(x);
    try { 

        /* We could uncomment the following 2 lines of code to default the value of 'n' to be 1000000. And comment/remove the current blank check.
         * So if the user clicks on Generate without entering and number stil the random number will be generated.
         */ 

        /*if(x === "")
            x = 1000000;*/
        if(x === "") throw "not specified.";   
        /*
        * Another way to validate the input is to use input type = number in stead of input type = text. 
        * It helps to avoid the isNaN check of the input. Also we could set limit on the input number when using input type = number.
        */    

        if(isNaN(x)) throw "is not a valid number.";
        if(x < 0) throw "cannot be less than 0.";
        if(x > 1000000) throw "cannot exceed 1000000";
        
        randomNumber(x);
    }
    catch(err) {
        message.innerHTML = "Input " + err;
    }
        
}


function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n){
    console.log("n" + n);

    let s0 = 0;
    let s1 = 0;

    if(flip()){
        s1 = 1;
        s0 = 2;
    } 
    else{
        s1 = 12;
        s0 = 23;
    }

  var random = pseudoRandomNumber(s0, s1);
  if(random > n)
    {
       random = random % n;
    }

  document.getElementById('number').innerHTML = random;  
}


// Used the underlying implementation of Math.random() by browsers as shoen and explained at : https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131

// Verified the explanation. Javascript documentation does use this 'xorshift' technique, however their shift input numbers vary.
// In the below code we could add the code of taking Modulus of the shift operands with current date (milliseconds value) on other shift operands as well to increse the randomness.

function pseudoRandomNumber(a,b) {

    let s1 = a; 
    let s0 = b; 
    let state0 = s0;  
    let state1 = 0;

    s1 ^= s1 << (new Date().getTime() % 23);  // SHIFT
    s1 ^= s1 >> 17;  // SHIFT
    s1 ^= s0;
    s1 ^= s0 >> 26;  // SHIFT
    state1 = s1;

   return state0 + state1;
   
}
