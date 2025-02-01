// intialize variables
let length;
let width;

function calculateArea() {
    length = document.getElementById("length").value;
    width = document.getElementById("width").value;
    length = parseFloat(length);
    width = parseFloat(width);
    // calculate area
    let area = length * width;
    document.getElementById("result").innerHTML = `The area of the rectangle is: ${area}`;
    
}
