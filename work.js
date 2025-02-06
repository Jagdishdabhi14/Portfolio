document.querySelector(".nav-link").addEventListener("click", function (event) {
    event.preventDefault(); 
    document.querySelector("#dive").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("preview").addEventListener("click", function () {
        window.location.href = "newpage.html"; // Change this to your desired page
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("preview1").addEventListener("click", function () {
        window.location.href = "newpage1.html"; // Change this to your desired page
    });
});