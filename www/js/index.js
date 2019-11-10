var app = {
    initialize: function () {

        var url = "https://api.nasa.gov/planetary/apod?api_key=KEY";

        $("#randomImage").click(function () {
            $.ajax({
                url: url + "&date=" + randomDate(new Date(2015, 0, 1), new Date()),
                success: handleResult
            });

            function handleResult(result) {
                $("#spaceimage").attr("src", result.url);

                $("#spaceimage").responsiveImg();

                $("#copyright").text("Copyright: " + result.copyright);
                $("#desc").text(result.explanation);
            }
        });
    },
};

app.initialize();

// based on https://gist.github.com/miguelmota/5b67e03845d840c949c4
function randomDate(start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    var dat = date.getDate();
    var month = date.getMonth() + 1;
    var yr = date.getFullYear();

    return yr + "-" + month + "-" + dat;
}

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



