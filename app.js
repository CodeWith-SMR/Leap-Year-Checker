// JavaScript code
function checkLeapYear() {
    var year = document.getElementById("year").value;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                document.getElementById("result").innerText = "The Year " + year + " is a Leap Year";
            } else {
                document.getElementById("result").innerText = "The Year " + year + " is not a Leap Year";
            }
        } else {
            document.getElementById("result").innerText = "The Year " + year + " is a Leap Year";
        }
    } else {
        document.getElementById("result").innerText = "The Year " + year + " is not a Leap Year";
    }
}
