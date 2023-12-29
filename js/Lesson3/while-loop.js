
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// // 0 1 2 3 4 5

let i = 0;

while (i < 10) {

    if (i === 5) {
        console.log("=>> 5 <<=");
        break;
    }
    console.log(i);
    i++;
}