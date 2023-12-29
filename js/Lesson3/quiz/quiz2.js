// - ពិន្ទុធំជាងឬស្មើ 90 និង តូចជាងឬស្មើ 100 នោះ Grade = A ។
// - ពិន្ទុធំជាងឬស្មើ 80 និង តូចជាងឬស្មើ 89 នោះ Grade = B ។
// - ពិន្ទុធំជាងឬស្មើ 70 និង តូចជាងឬស្មើ 79 នោះ Grade = C ។
// - ពិន្ទុធំជាងឬស្មើ 60 និង តូចជាងឬស្មើ 69 នោះ Grade = D ។
// - ពិន្ទុធំជាងឬស្មើ 50 និង តូចជាងឬស្មើ 59 នោះ Grade = E ។
// - ពិន្ទុតូចជា 50 នោះ Grade = F ។

var grade=100;

if(grade>=90 && grade<=100){
    console.log("grade A");
}else if(grade>=80 && grade<=89){
    console.log("grade B ");
}else if(grade>=70 && grade<=79){
    console.log("grade C ");
}else if(grade>=60 && grade<=69){
    console.log("grade D ");
}else if(grade>=50 && grade<=59){
    console.log("grade E ");
}else{
    console.log("grade F")
}