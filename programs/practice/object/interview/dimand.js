// function pattern_printer(n){
//     for(let i=1;i<=n;i++){
//         console.log("* ".repeat(i));
//     }
//     for(let i=n-1;i>=1;i--){
//         console.log("* ".repeat(i));
//     }

// }

// pattern_printer(3);
// console.log("hello");
// pattern_printer(6);
function pattern_printer(n) {
    
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "* ".repeat(i));    
    }

    for (let i = n - 1; i >= 1; i--) {
        console.log(" ".repeat(n - i) + "* ".repeat(i));
    }
}

// Example usage
pattern_printer(3);
pattern_printer(6);
