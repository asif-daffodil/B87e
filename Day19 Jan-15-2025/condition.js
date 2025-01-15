const age = 140;

if(age <= 12 && age >= 0) {
    console.log('You are a child');
}else if(age < 19 && age > 12){
    console.log('You are a teenager');
}else if(age <= 29 && age > 19){
    console.log('You are a young person');
}else if(age <= 49 && age > 29){
    console.log('You are a middle aged person');
}else if(age <= 130 && age > 49){
    console.log('You are an old person');
}else{
    console.log('You are not in this world');
}


// in Bangladesh, the legal age for marriage is 21 for men and 18 for women
const personAge = 20;
const personGender = "Female";

if(personGender == "Male"){
    if(personAge >= 21){
        console.log('You are eligible for marriage');
    }else{
        console.log('You are not eligible for marriage');
    }
}else if(personGender == "Female"){
    if(personAge >= 18){
        console.log('You are eligible for marriage');
    }else{
        console.log('You are not eligible for marriage');
    }
}
