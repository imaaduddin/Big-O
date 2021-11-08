// Space Complexity 

function countDown(n) {
    if (n === 0) {
        return;
    }
    return countDown(n - 1);
}

// Common Mistakes 
function twoLopps(a) {
    for (let i = 0; i < a; i++) {
        // do something
    }

    for (let i = 0; i < a; i++) {
        // do something
    }
}

// The above function is O(2n) not O(n^2)

function twoInputAdd(a , b) {
    for (let i = 0; i < a; I++) {
        // do something
    }

    for (let i = 0; i < b; i++) {
        // do something
    }
}

// The above function is O(a + b) not O(2n)

function twoInputsMult(a, b) {
    for (let i = 0; i < a; i++) {
        for (let i = 0; i < b; i++) {
            // do something 
        }
    }
}

// The above function is O(a * b) not O(n^2)