
function redirect_page(){
    window.location.href="/vishal/html/workspace-page-1.html"
}

let loginButton = document.getElementById("login");

let loginUserUsername = document.getElementById("login-username");
let loginPassword = document.getElementById("login-password");

loginButton.addEventListener("click",async function(){
    let userName = loginUserUsername.value;
    let password = loginPassword.value;


    let userObj = {
        username: userName,
        password: password,
    };

    try {
        let res = await fetch('https://6399f35116b0fdad774f2f63.mockapi.io/profile',{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body:JSON.stringify(userObj),
        });
        let data = await res.json();
        window.location.href="/meek-furniture-9106/vishal/html/dashboard.html"
        alert("successfully login");

    } catch (error) {
        console.log("error");
    }

})


