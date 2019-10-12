var users = [
    {
        username = "Juuso",
        password = "MobApp"
    }]

function login() {
    var username = document.getElementbyId("username").value
    var password = document.getElementById("password").value

    for (i = 0; users.lenght; i++) {
        if (username == users[i].username && password == users[i].password) {
            window.location.href = 'page.html';
        } else {
            alert("Incorrect username or password.")
        }
    }
}