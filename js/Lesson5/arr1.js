// print element in array
// var scores = [20, 30, 40, 50];

// for (let i = 0; i < scores.length; i++) {
//     console.log(scores[i]);
// }


var scores = [20, 30, 40, 50];

// var totalScores = scores[0] + scores[1] + scores[2] + scores[3];
var totalScores = 0;


// for (let i = 0; i < 4; i++) {
//     totalScores += scores[i];
// }


for (let i = 0; i < scores.length; i++) {
    totalScores += scores[i];
}


console.log("the total scores =", totalScores);
console.log("the total average =", totalScores/scores.length);


