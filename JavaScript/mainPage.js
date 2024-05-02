function ageGuesser() {
    var ageNumber = prompt("Enter You'r Guess");
    ageNumber = Number(ageNumber)
    if (ageNumber == "21") {
        alert(ageNumber + " " + "Great Guess Correct!");
    }
    else if (ageNumber => "20" < "22") { alert("Bad Guess Try Again") }
}