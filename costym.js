attack = 0
function move1p1() {
  let move = document.getElementById("player1_attacks1").value;
  console.log(move);
  return attack = 5
};
function move1p2() {
  let move = document.getElementById("player1_attacks2").value;
  console.log(move);
  return attack = 2
};
function move1p3() {
  let move = document.getElementById("player1_attacks3").value;
  console.log(move);
  return true
};
function move1p4() {
  let move = document.getElementById("player1_attacks4").value;
  console.log(move);
  return true
};
function move2p1() {
  let move = document.getElementById("player2_attacks1").value;
  console.log(move);
  return true
};
function move2p2() {
  let move = document.getElementById("player2_attacks2").value;
  console.log(move);
  return true
};
function move2p3() {
  let move = document.getElementById("player2_attacks3").value;
  console.log(move);
  return true
};
function move2p4() {
  let move = document.getElementById("player2_attacks4").value;
  console.log(move);
  return true
};
//attackera

function attackbutton1p1(){
  let pl_1_health = document.getElementById("health1").value;
  document.getElementById("health1").value -= 5;
  console.log(pl_1_health)
};
