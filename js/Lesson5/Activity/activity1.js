// var myColors = ["Red", "Green", "White", "Black"];
// var concat = "";

// for (let i = 0; i < myColors.length; i++) {
//     if(i!=myColors.length-1){
//         concat += myColors[i]+" , ";
//     }else{
//         concat += myColors[i];
//     }

// }
// console.log(concat);


var myColors = ["Red", "Green", "White", "Black"];
var concat = "";

for (let i = 0; i < myColors.length; i++) {
    if (i != myColors.length - 1) {
        concat += myColors[i] + " , ";
    }
    else {
        concat += myColors[i];
    }
    // concat += myColors[i] + " , ";
}
console.log(concat);