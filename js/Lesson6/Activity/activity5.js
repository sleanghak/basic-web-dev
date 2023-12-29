// 5. amount of property

var students = {
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12,
    grade: 'A',
};

let length = 0;
for (key in students) {
    length++;
}
console.log("amount of property =",length);

// console.log("amount of property =", Object.keys(students).length);
