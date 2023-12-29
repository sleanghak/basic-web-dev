var option = 5;

var total;
var num1 = 2;
var num2 = 2;


switch (option) {
    case 1:
        total = num1 + num2;
        break;
    case 2:
        total = num1 - num2;
        break;
    case 3:
        total = num1 * num2;
        break;
    case 4:
        total = num1 / num2;
        break;
    default:
        console.log("==> No Option...!")
        break;
}
console.log("==> The results", total);