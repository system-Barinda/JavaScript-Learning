// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   let totalgoals = laLigaGoals + copaDelReyGoals +championsLeagueGoals;
//   return totalgoals;
// }
// console.log(goals(12,12,12));

function goals(...a){
    return a.reduce((a,b) => a + b,0);
}
console.log(goals(12,12,12));