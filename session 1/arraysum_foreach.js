x = [10, 20, 30, 40];

sum = 0;

x.forEach(function(element) { //for each function takes a function itself as a parameter
    sum += element;
});

console.log("Sum: ", sum);