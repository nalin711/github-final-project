let count = 0; // initialize counter

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    //Display the count in html
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if (count==10) {
        alert("Your instagram post gained 10 followers. Congrats!");
    } else if (count==20) {
        alert(`You;vegot ${count} followers. Congrats!`);
    }
}