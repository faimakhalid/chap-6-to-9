// Question no 1
// Initial value
var a = 10;
document.write("The value of a is: " + a + "<br>..................................<br><br>");

// Pre-increment
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Question no 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// Explanation:
// Step 1: --a => Pre-decrement 'a'. a = 1.
// Step 2: --b => Pre-decrement 'b'. b = 0.
// Step 3: --a - --b => 1 - 0 = 1.
// Step 4: ++b => Pre-increment 'b'. b = 1.
// Step 5: --a - --b + ++b => 1 + 1 = 2.
// Step 6: b-- => Post-decrement 'b'. Value used is 1, then b = 0.
// Final result: --a - --b + ++b + b-- => 1 + 1 + 1 = 3.

document.write("a is: " + a + "<br>"); // Value of a after all operations: 1
document.write("b is: " + b + "<br>"); // Value of b after all operations: 0
document.write("result is: " + result + "<br>"); // Result: 3

// Question no 3
function greetUser() {
    // Get the name from input
    var name = document.getElementById("userName").value;

    // Check if the name is not empty
    if (name) {
        // Display greeting message
        document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome!";
    } else {
        // If no name is entered
        document.getElementById("greeting").innerHTML = "Please enter your name.";
    }
}

// Question no 4
function showTable() {
    // Get the input number
    var number = document.getElementById("numberInput").value;

    // Use 5 as default if no input is provided
    if (number === "" || isNaN(number)) {
        number = 5;
    }

    // Convert to a number
    number = parseInt(number);

    // Generate the multiplication table
    var result = "";
    for (var i = 1; i <= 10; i++) {
        result += number + " x " + i + " = " + (number * i) + "\n";
    }

    // Display the table
    document.getElementById("table").textContent = result;
}

// Question no 5
  // Step (a) - Take three subject names from user
  var subject1 = prompt("Enter the name of the first subject:");
  var subject2 = prompt("Enter the name of the second subject:");
  var subject3 = prompt("Enter the name of the third subject:");

  // Step (b) - Total marks for each subject
  var totalMarksPerSubject = 100;

  // Step (c) - Obtained marks for the first subject
  var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

  // Step (d) - Obtained marks for the remaining two subjects
  var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
  var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

  // Step (e) - Calculate total marks and percentage
  var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
  var totalMarks = totalMarksPerSubject * 3;
  var percentage = (totalObtainedMarks / totalMarks) * 100;

  // Display the result in a table format
  document.write("<table border='1' cellpadding='10'>");
  document.write("<tr>");
  document.write("<th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td><td>" + ((obtainedMarks1 / totalMarksPerSubject) * 100).toFixed(2) + "%</td>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td><td>" + ((obtainedMarks2 / totalMarksPerSubject) * 100).toFixed(2) + "%</td>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td><td>" + ((obtainedMarks3 / totalMarksPerSubject) * 100).toFixed(2) + "%</td>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td><b>Total</b></td><td>" + totalMarks + "</td><td>" + totalObtainedMarks + "</td><td>" + percentage.toFixed(2) + "%</td>");
  document.write("</tr>");
  document.write("</table>");