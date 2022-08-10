// Create function addUser()
function addUser(){
  player1_name=document.getElementById("player1_name_input").value;
  player2_name=document.getElementById("player2_name_input").value;
  localStorage.setItem("player1_name", player1_name);
  localStorage.setItem("player2_name", player2_name);
  window.location="game_page.html"
}
  // Get value of user by id player1_name_input and player2_name_input

  // Store these values locally

  //Assign "game_page.html" to window.location

function send() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1) * parseInt(number2);
}

question_number = "h4" + number1 + " X "+ number2 +"</h4>";
input_box = "br>Answer : <input type='text id='input_check_box'>";
