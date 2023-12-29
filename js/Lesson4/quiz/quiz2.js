
function operator(option,num1,num2) {
    // let option = 5;
    let total;
    // let num1 = 2;
    // let num2 = 4;

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
            console.log("No Option..!");
            break;
    }
    console.log("the total :",total);
}
operator(1,20,30);