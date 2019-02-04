alert("Conneted to comparisonCalc.js");
var x = prompt("Enter value 1");
var y = prompt("Enter value 2");
var comp = prompt("Enter comparison operator");

var operators = {
    '+': function(a, b) { return a + b },
    '<': function(a, b) { return a < b },
    '>': function(a, b) { return a > b },
    '%': function(a, b) { return a % b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '=': function(a, b) { return a = b },
    '==': function(a, b) { return a == b },
    '!=': function(a, b) { return a != b },
    '===': function(a, b) { return a === b },
     // ... more operators can be added as needed
};


alert(operators[comp](x, y));