object

--object is an unordered collection of key-value pairs.each key value pair called propeties.
--The key of a property can be a string. The value of a property can be any value, e.g., a string, a number, an array, and even a function.

Accessing properties
To access a property of an object, you use one of two notations: the dot notation and array-like notation.
1) The dot notation (.)
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person.firstName);
console.log(person.lastName);

2) Array-like notation ( [])
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person['firstName']);
console.log(person['lastName']);

Modifying the value of a property
 To change the value of a property, you use the assignment operator (=). For example:
Adding a new property to an object
Deleting a property of an object
Checking if a property exists



object method:an object is a collection of key value pairs or propeties.when value is a function,the propeties become method.
typically,you use  methods to describe the object's behavoiurs.

Object method shorthand
JavaScript allows you to define methods of an object using the object literal syntax as shown in the following example

let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    }
};
person.greet();