//Import modules:
const input = require('readline-sync');
const averages = require('./ScoreCalcs/averages.js');
const printAll = require('./display.js');
const randomSelect = require('./randomSelect.js');
const randomFromArray = require('./randomSelect.js');

//Candidate data:
let astronauts = ['Fox','Turtle','Cat','Hippo','Dog'];

const testTitles = ['Math','Fitness','Coding','Nav','Communication'];

let scores = [[95, 86, 83, 81, 76],[79, 71, 79, 87, 72],[94, 87, 87, 83, 82],[99, 77, 91, 79, 80],[96, 95, 99, 82, 70]];

//User interface:
let prompts = ['display all scores', 'average the scores for each test', 'average the scores for each astronaut','select the next spacewalker'];

for (let i = 0; i<prompts.length; i++){
  let response = input.question(`Would you like to ${prompts[i]}? Y/N: `);
  if (response.toLowerCase()==='y'){
    if (i===0){
      //Call 'printAll' here and pass in all necessary arguments.
      printAll(astronauts, testTitles, scores);

    } else if (i===1){
      for (let j = 0; j<testTitles.length; j++){
        let avg = averages.averageForTest(j, scores);
        console.log(`${testTitles[j]} test average = ${avg}%.`);
      }
    } else if (i===2){
      for (let j = 0; j<astronauts.length; j++){
        let avg = averages.averageForStudent(j, scores);
        console.log(`${astronauts[j]}'s test average = ${avg}%.`);
      }
    } else {
      let walker = randomFromArray(astronauts);
      console.log(`${walker} is the next spacewalker.`);
    }
  } else {
    console.log("Option skipped.");
  }
}
