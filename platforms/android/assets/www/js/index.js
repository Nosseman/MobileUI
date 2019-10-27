$(document).on("ready", function () {
    databaseHandler.createDatabase();
});

function addUser() {
    var username = $("#txtUsername").val();
    var password = $("#txtPassword").val();

    if (!username) {
        alert("Username is required");
    } else {
        var r = confirm("Username: " + username);
        if (r == true) {
            userHandler.addUser(username, password);
            $("#txtUsername").val("");
            $("#txtPassword").val("");
        }
        closeMenu('registerMenu');
    }
}

function login() {
    var username = $("#loginUsername").val();
    var password = $("#loginPassword").val();
    var userid = "" + username + password
    userHandler.getUser(userid);
}

