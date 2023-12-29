// 6. create function prototype

// function Animal(name, color, kind, weigh) {
//     return {
//         name: name,
//         color: color,
//         kind: kind,
//         weigh: weigh,
//     };
// };
// var dog = Animal('LULU', 'black', 'dog', 10);
// var cat = Animal('Meow', 'white', 'cat', 2.5);

// store obj into an array
// var arrayOfAnimal = [dog, cat];

// var arrayOfAnimal = [];
// arrayOfAnimal.push(dog);
// arrayOfAnimal.push(cat);

// convert to string
// console.log(JSON.stringify(dog));
// convert ទៅជាសភាពដើមវិញ
// console.log(JSON.parse(JSON.stringify(dog)))

function Animal(name, color, kind, weigh) {
    return {
        name: name,
        color: color,
        kind: kind,
        weigh: weigh,
    };
};
var dog = Animal('LULU', 'black', 'dog', 10);
var cat =Animal('GG','red','cat',3);
var arrayOfAnimal = [dog,cat];
console.log(arrayOfAnimal);
