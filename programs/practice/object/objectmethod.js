{//nomral function call
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.greet = function () {
    console.log('Hello!');
}

person.greet();
}
{//define a function and assign it to an object
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

function greet() {
    console.log('Hello, World!');
}
person.alam=greet;

person.alam();
}





