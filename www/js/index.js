var users = [
    {
        username = "juuso",
        password = "app"
    },
    {
        username = "teacher",
        password = "laurea"
    }]

function login() {
    var username = document.getElementbyId("username").value
    var password = document.getElementById("password").value

    for (i = 0; users.lenght; i++) {
        if (username == users[i].username && password == users[i].password) {
            openPage('page');
        } else {
            alert("Incorrect username or password.")
        }
    }
}