


function FunctionOper() {

    let option = 3;
    let total;
    let num1 = 2;
    let num2 = 4;

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
    }
    console.log("The total : ",total);

}
FunctionOper();