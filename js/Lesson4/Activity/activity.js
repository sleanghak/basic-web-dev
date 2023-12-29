// ចូរបង្កើតកម្មវិធីដែលអាចធ្វើការគណនានៃប្រមាណវិធីបូក ដក គុណ ចែក ។


function addFunction(num1, num2) {

    console.log("total num1+num2 : ", num1 + num2)
    console.log("total num1-num2 : ", num1 - num2)
    console.log("total num1*num2 : ", num1 * num2)
    console.log("total num1/num2 : ", num1 / num2)

}
addFunction(2, 4);

// ចូរបង្កើតកម្មវិធីដែលអាចធ្វើការគណនា ផ្ទៃក្រឡាត្រីកោណ និង បរិមាត្រត្រីកោណ ។


function addFunction1(b, h) {
    let s;
    // ផ្ទៃក្រឡាត្រីកោណ
    s = 1 / 2 * (b * h);
    console.log("the total s=",s);
}

addFunction1(2,4);



function addFunction2(a,b ,c) {
    let p;
    // បរិមាត្រត្រីកោណ
    p = a+b+c;
    console.log("the total p=",p);
}

addFunction2(2,4,6);
