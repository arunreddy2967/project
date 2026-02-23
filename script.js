document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    if(name && email && course){
        document.getElementById("message").innerText =
        "Student Registered Successfully!";
    } else {
        document.getElementById("message").innerText =
        "Please fill all fields!";
    }
});
