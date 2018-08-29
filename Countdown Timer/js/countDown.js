// Date set to quiz deadline can be changed to later dates for testing.

var countDownDate = new Date("Aug 30, 2018 08:33:00").getTime();

// Update the count down every 1 second.
var x = setInterval(function() {

  // Get todays date and time.
  var currentTime = new Date().getTime();

  // Find the difference between current time and the count down date
  // Resultant value in milliseconds. Counter from epoch.
  var timeToGo = countDownDate - currentTime;

  if(timeToGo >= 0){
    
    var d = Math.floor(timeToGo / (1000 * 60 * 60 * 24));
  var h = Math.floor((timeToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((timeToGo % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((timeToGo % (1000 * 60)) / 1000);

  var days = (d === 1) ? "1 <br/><span class = 'textFont'> Day </span>" : d + "<br/><span class = 'textFont'> Days </span> " ;
  days = "<center>" + days + "</center>";
  
  var hours = (h === 1) ? "1 <br/><span class = 'textFont'> Hour <span>" : h + " <br/><span class = 'textFont'> Hours </span> " ;
  hours = "<center>" + hours + "</center>";
  
  var minutes = (m === 1) ? "1 <br/><span class = 'textFont'> Minute </span>" : m + "<br/><span class = 'textFont'> Minutes </span> " ;
  minutes = "<center>" + minutes + "</center>";
  
  var seconds = (s === 1) ? "1 <br/><span class = 'textFont'> Second </span>" : s + "<br/><span class = 'textFont'> Seconds </span> " ;
  seconds = "<center>" + seconds + "</center>";
  
  document.getElementById("container").innerHTML = "<div class = 'innerContainer'> <div id = 'timeBox' >"+ days + "</div> <div id = 'timeBox'>"+ hours + "</div> <div id = 'timeBox'>" + minutes + " </div> <div id = 'timeBox'> " + seconds + " </div> </div>";
  
  }

  // If the count down is finished, write some text 
  if (timeToGo < 0) {
    clearInterval(x);
    document.getElementById("container").innerHTML = "<h1><center>Countdown Expired.</center></h1>";
  }
}, 1000);