//Login
function Login()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    $.ajax({
        url: "http://projectace.net/api/2ee9048e1d17e662e646aa5ed1376142ea60b847/2a6497ddc46141a285d6653d437ba955a1a0a8e1/login/?email=" + email + "&password=" + password,
        data: {
        },
        cache: false,
        type: "GET",
        success: function(response) {

            if (!isNaN(response))
            {
                window.localStorage.setItem("userid", response);
                window.location = "feed.html";
            } else
            {
                alert(response);
            }
        },
        error: function(xhr) {
            alert("Could not connect!");
        }
    });
}

//Logout
function Logout()
{
    window.localStorage.removeItem("userid");
    window.location = "index.html";
}

//Get Profile
function GetProfile()
{
    if (window.localStorage.getItem("userid"))
    {
        var userid = window.localStorage.getItem("userid");

        $.ajax({
            url: "http://projectace.net/api/2ee9048e1d17e662e646aa5ed1376142ea60b847/2a6497ddc46141a285d6653d437ba955a1a0a8e1/getprofile/?id=" + userid,
            data: {
            },
            cache: false,
            type: "GET",
            success: function(response) {
                var profile = JSON.parse(response);
                document.getElementById("pic").src = profile["ThumbImage"];
                $("#username").html(profile["UserName"]);
            },
            error: function(xhr) {
                alert("Could not connect!");
            }
        });
    } else
    {
        window.location = "index.html";
    }
}


