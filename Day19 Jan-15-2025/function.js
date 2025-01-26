function myFunction (msg = "Hi", msg2 = "There") {
  return msg + " " + msg2;
}

console.log(myFunction("Hello", "World"));
console.log(myFunction("Goodbye", "World"));
console.log(myFunction("Hello"));
console.log(myFunction());
console.log(myFunction(undefined, "World"));

const myOtherFunc = function (country = "Bangladesh") {
    return "Hello " + country;
}

console.log(myOtherFunc());
console.log(myOtherFunc("USA"));

const myArrowFunc = (name = "Asif") => {
    return "Hello " + name;
}
console.log(myArrowFunc("Moni"));
console.log(myArrowFunc());

const myArrowFunc2 = name => "Hello " + name;
console.log(myArrowFunc2("Ifti"));
