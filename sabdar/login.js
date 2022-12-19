
// function bhejo() {

// }

let loginButton = document.getElementById("login");

// let loginUserUsername = document.getElementById("login-username");
// let loginPassword = document.getElementById("login-password");

loginButton.addEventListener('click', function () {
    window.location.href = "/vishal/html/dashboard.html"
})
//     let userName = loginUserUsername.value;
//     let password = loginPassword.value;


//     let userObj = {
//         username: userName,
//         password: password,
//     };

// })

// async function FetchDataFromApi() {
//     try {
//         let Fetched_the_data = await fetch("https://6399f35116b0fdad774f2f63.mockapi.io/profile", {
//             method: "GET",
//             headers: {
//                 "Content-type": "application/json",
//             },
//         });
//         console.log(Fetched_the_data);
//         if (Fetched_the_data.ok === true) {
//             let Got_the_data = await Fetched_the_data.json();
//             ShowData(Got_the_data);
//             let data = Got_the_data.map((item) => {
//                 if (item.username == userObj.username && item.password == userObj.password) {
//                     alert('try karo');
//                     window.location.href = "/vishal/html/dashboard.html"
//                 }
//             })
//         } else {
//             alert('kuch toh hua hai yaha')
//         }
//     } catch (error) {
//         alert("Was Not Able To Fetch The Data");
//     }
// }




