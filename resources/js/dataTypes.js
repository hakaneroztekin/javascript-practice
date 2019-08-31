let myNumber = 10;
let myString = "2";
let myObject = {firstName: "John", lastName: "Doe"};

function printMyDataTypes() {
    let result = "myNumber: " + myNumber
        + "<br/> myString: " + myString
        + "<br/> myObject: " + myObject
        + "<br/> myObject.firstName: " + myObject.firstName
        + "<br/> myObject.lastName: " + myObject.lastName;
    document.getElementById("result").innerHTML = result;
}

function printInterestingThing() {
    let x = myNumber;
    let result = "x is a number, x:" + x + printTypeOf(x);
    x = myString;
    result += "<br\>x is now a string, x:" + x + printTypeOf(x);
    x = myObject;
    result += "<br\>x is now an object, x:" + x + printTypeOf(x);
    document.getElementById("thing").innerHTML = result;
}

function printTypeOf(value) {
    return " is type of " + (typeof value).fontcolor("red");
}