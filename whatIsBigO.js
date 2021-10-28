// What is Big O Notation? 
// Big O Notation is used to analyze the efficiency of an algorithm as its input approaches infinity, which means that as the size of the inputs of the algorithm grows, how drastically do the space and time requirements grow with it 

/*
Orders of Growth
O(1) --> Constant 
O(log n) --> Logarithmic 
O(n) --> Linear
O(n log n) --> Linearithmic 
O(n^2) --> Quadratic 
O(n^3) --> Cubic
O(2^n) --> Exponential 
O(n!) --> Factorial

Ordered from good to bad O(1) is the best and O(n!) is the worst 

In Big O Notation, when determining the efficiency of an algorithm we only care about the worse case
*/

function linearFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(1000 * 100000);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
linearFunc(arr);