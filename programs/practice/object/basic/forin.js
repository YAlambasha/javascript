// function getUsers() {
//     return [
//       { username: 'john', email: 'john@test.com' },
//       { username: 'jane', email: 'jane@test.com' },
//     ];
//   }
  
//   function findUser(username) {
//     const users = getUsers(); 
//     console.log(users);
//     const user = users.find((user) => user.username === username);
//     return user;
//   }
  
//   console.log(findUser('john'));
  
//   const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     let success = true; // This is just for demonstration
  
//     if (success) {
//       resolve('Operation was successful');
//     } else {
//       reject('Operation failed');
//     }
//   });

let numbers = [4,2,6,9];
numbers.sort(function(x,y){ 
    return y - x; 
});
console.log(numbers); //[6,4,2]
console.log(typeof(numbers));  

