//your JS code here. If required.
// Select the element with id 'level'
let element = document.getElementById("level");

// Initialize level counter
let level = 0;

// Traverse up the DOM tree until reaching null
while (element) {
    level++;
    element = element.parentElement;
}

// Display the level
alert("The level of the element is: " + level);
