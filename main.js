let teamScoreA = 0;
let teamScoreB = 0;

// FUNCTIONS FOR TEAM HOME//
function increaseScoreTeam1() {
  teamScoreA++;

  document.getElementById("teamOneScore").innerHTML = teamScoreA;
}

function decreaseScoreTeam1() {
  if (teamScoreA > 0) {
    teamScoreA--;
  }
  document.getElementById("teamOneScore").innerHTML = teamScoreA;
}

function teamName1() {
  let teamNameA = prompt("Enter Team Name");
  if (teamNameA.length > 10) {
    alert("Please Enter Less Character than 10");
  } else {
    document.getElementById("team1").innerHTML = teamNameA;
  }
}

function teamScore1() {
  let scoreA = prompt("Enter Score");
  if (isNaN(scoreA)) {
    alert("Please Enter Only Numbers!");
  } else {
    document.getElementById("teamOneScore").innerHTML = scoreA;
  }
}

// FUNCTIONS FOR TEAM AWAY //
function increaseScoreTeam2() {
  teamScoreB++;

  document.getElementById("teamTwoScore").innerHTML = teamScoreB;
}

function decreaseScoreTeam2() {
  if (teamScoreB > 0) {
    teamScoreB--;
  }
  document.getElementById("teamTwoScore").innerHTML = teamScoreB;
}

function teamName2() {
  let teamNameB = prompt("Enter Team Name");
  if (teamNameB.length > 10) {
    alert("Please Enter Less Character than 10");
  } else {
    document.getElementById("team1").innerHTML = teamNameB;
  }
}

function teamScore2() {
  let scoreB = prompt("Enter Score");
  if (isNaN(scoreB)) {
    alert("Please Enter Only Numbers!");
  } else {
    document.getElementById("teamTwoScore").innerHTML = scoreB;
  }
}
