var fname = prompt("Please enter your full name:", " ");
var username = prompt("Please enter your username:", " ");

if (confirm("What is your gender?\nPress OK if you are Male\nPress Cancel if you are Female")) {
    alert("Your profile gender is set to MALE");
    var gender = "M";
} else {
    alert("Your profile gender is set to FEMALE");
    var gender = "F";
}

var desc = prompt("Please type a brief description of yourself:", " ");
yearPrompt = prompt("Please enter you Birth Year:", " ");

if (isNaN(yearPrompt) || yearPrompt === null) {
    var year = "NaN";
    var age = "NaN";
} else {
    var year = yearPrompt;
    var age = 2023 - year;
}

if (confirm("Do you want a custom profile picture?")) {
    var ppic = prompt("Please enter the file name of the picture. (Ex: wow.jpg)");
    alert("Profile picture has been updated.");
} else {
    alert("No image has been set.");
}


document.getElementById("fname").innerHTML = fname;
document.getElementById("username").innerHTML = username;
document.getElementById("gender").innerHTML = gender;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src = ppic;
