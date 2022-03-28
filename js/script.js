function myfunction(){
  var score=0;
  if (document.getElementById("correct1").checked)
  {
      score++;
  }
  if (document.getElementById("correct2").checked)
  {
      score++;
  }
  if (document.getElementById("correct3").checked)
  {
      score++;
  }
  if (document.getElementById("correct4").checked)
  {
      score++;
  }
  if (document.getElementById("correct5").checked)
  {
      score++;
  }document.getElementById("scorep").innerHTML = score
}
var customerName = prompt("Please enter your name", "<name goes here>");
if (customerName!= null) {
    document.getElementById("welcome").innerHTML =
    "Hello " + customerName + "! How are you today?";
}