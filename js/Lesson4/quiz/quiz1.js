// 1./ ចូរសរសេ រកម្មវិធីមួយដែ លអាចគណនារកការបញ្ចុះ តម្លៃ ទៅ តាមការចំណាយសរុប ដែ លមានដូចខាង
// ក្រោ មដូចខាងក្រោម (ដោយប្រើ function with no parameters and function with parameters)៖
// - បើ ចំណាយអស់ក្រោ ម ២០ដុល្លា បញ្ចុះ តម្លៃ ៣ភាគរយ
// - បើ ចំណាយអស់ក្រោ ម ៤០ដុល្លា បញ្ចុះ តម្លៃ ៥ភាគរយ
// - បើ ចំណាយលើ សពី ៤០ដុល្លា បញ្ចុះ តម្លៃ ១០ភាគរយ។

// function Discount() {
//     let payment = 20;
//     let dis;

//     if (payment < 20) {
//         dis = payment * 0.03;
//     }
//     else if (payment < 40) {
//         dis = payment * 0.05;
//     }
//     else {
//         dis = payment * 0.10;
//     }
//     console.log("The total discount = ", dis,"%")

// };

// Discount();


// function Discount() {
//     let payment = 50;
//     let dis;

//     if (payment < 20) {
//         dis = payment * 0.03;
//     }
//     else if (payment < 40) {
//         dis = payment * 0.05;
//     }
//     else {
//         dis = payment * 0.10;
//     }
//     console.log("the total discount :",dis,"%");

// }
// Discount();



function Discount(payment) {
    let dis;

    if (payment < 20) {
        dis = payment * 0.03;
    }
    else if (payment < 40) {
        dis = payment * 0.05;
    }
    else {
        dis = payment * 0.10;
    }
    console.log("the total discount :", dis, "%");

}
Discount(50);