// scroll button
let calcScrollvalue = () => {
    let progress = document.getElementById("progress");
    let progressvalue = document.getElementById("pro-value");

    let position = document.documentElement.scrollTop;
    // console.log(position); 
    let calcheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((position * 100) / calcheight);
    // console.log(scrollValue);

    // progress.style.transition = "2s"

    if (position > 100) {
        progress.style.display = "grid"
    } else {
        progress.style.display = "none"
    }

    progress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    progress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcScrollvalue;
window.onload = calcScrollvalue;




// page redirect to signup page 

let getStartedbtn = document.getElementById("btn2");

// getStartedbtn.onclick = () => {
//     console.log("adasd");
//     // window.location.href="#"
// }
// console.log(getStartedbtn);

function get() {
    // console.log("hello");
    window.location.href="/vishal/html/workspace-page-1.html";
}

// change image on hover in add on section
let addonDiv = document.querySelectorAll(".add-on-cardwrap");
let addonImg = document.querySelectorAll(".add-on-card img");

// addonDiv.addEventListener("click", (event) => {
// alert("working");
// addonImg.innerHTML = "";
// addonImg.innerHTML = `
// <img src="https://web-static.wrike.com/tp/storage/uploads/4e08805a-a80b-42cf-8ac3-b8ec8a4b24ab/brandevo-icon-intergrations-inverse.svg" alt="">
// `;
// })



//signup section redirected page 
let signupBtnRedirect = document.querySelector(".input_button button");
let signupInputTag = document.querySelector(".input_button form input")

signupBtnRedirect.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("working");
    // signupInputTag.focus();
    if (signupInputTag.value) {
        window.location.href = "/vishal/html/workspace-page-1.html";
    } else {
        alert("Please fill your email address to continue!")
    }
})



// faq inner text after unwrap
let count = 0;
let faq_p1 = document.querySelector('#faq-p1')
let faqText1 = document.querySelector("#faq1");

faqText1.addEventListener("click", (event) => {

    count++
    console.log(count)
    if (count % 2 == 0) {
        faq_p1.innerHTML = "";
    } else {
        faq_p1.innerHTML = "";
        // console.log('working');
        faqText1.style.backgroundColor = "white"
        faqText1.style.color = "black"
        faq_p1.innerHTML = `
        <p class="showContent-p"> Wrike has a variety of different options available to suit your team, including three types of user licenses – regular users, external users, and collaborators. For regular and external users, there is a charge per user. You’ll get 20 collaborator invites or 15% of your license count (whichever is greater) with no additional charge included with your subscription. If this is not enough, please speak with your Wrike representative to discuss other options.

        Within these, there are full and guest licenses. A full license (regular users and external users) gives you access to every feature within your plan but external users are limited to certain access rights. However, a guest license (collaborators) only gives you some basic functions. 
        </p>
        <p style="color: #0b4a52;">Read More
        <img src="data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2013L15%208L10%203%22%20stroke%3D%22%230a615a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cline%20x1%3D%2214%22%20y1%3D%228%22%20x2%3D%22-8.74228e-08%22%20y2%3D%228%22%20stroke%3D%22%230a615a%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E" alt="">
        </p>             
    `
    }
});


let faq_p2 = document.querySelector('#faq-p2');
let faqText2 = document.querySelector("#faq2");

faqText2.addEventListener("click", (event) => {
    count++;
    console.log(count)
    if (count % 2 == 0) {
        faq_p2.innerHTML = "";
    } else {
        faq_p2.innerHTML = "";
        // console.log('working');
        faqText2.style.backgroundColor = "white"
        faqText2.style.color = "black"
        faq_p2.innerHTML = `   
     <p class="showContent-p"> Your account will be blocked until you choose what you’d like to do with it. From here, you can either downgrade it to the free version or reach out to your Wrike representative. They will be able to discuss the next steps for choosing a plan and whether a trial extension is possible. 
     </p>
     <p style="color: #0b4a52;">Read More
     <img src="data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2013L15%208L10%203%22%20stroke%3D%22%230a615a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cline%20x1%3D%2214%22%20y1%3D%228%22%20x2%3D%22-8.74228e-08%22%20y2%3D%228%22%20stroke%3D%22%230a615a%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E" alt="">
     </p>      
    `
    }
});


let faq_p3 = document.querySelector('#faq-p3');
let faqText3 = document.querySelector("#faq3");

faqText3.addEventListener("click", (event) => {
    count++;
    console.log(count)
    if (count % 2 == 0) {
        faq_p3.innerHTML = "";
    } else {
        faq_p3.innerHTML = "";
        // console.log('working');
        faqText3.style.backgroundColor = "white"
        faqText3.style.color = "black"
        faq_p3.innerHTML = `
      
     <p class="showContent-p"> If you are a first-time user, enter your business email at the top of the page to get your 14-day free trial. You can give us a call to get set up or wait for one of our representatives to get in touch to find the right solution for your team.

     If you've completed a trial, you can purchase the Team plan for up to 25 users and the Business plan for up to 15 users with no add-ons in the Account section of your workspace. For a larger number of users, you'll need to contact your Wrike representative.
     
     Wrike is sold in groups of users. For accounts of up to 30 seats, subscriptions are sold in groups of five. For accounts of 30 to 100 seats, subscriptions are sold in groups of 10. For accounts above 100 seats, subscriptions are sold in groups of 25. Wrike Business and above are only available as an annual subscription.
     </p>
     <p style="color: #0b4a52;">Read More 
     <img src="data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2013L15%208L10%203%22%20stroke%3D%22%230a615a%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cline%20x1%3D%2214%22%20y1%3D%228%22%20x2%3D%22-8.74228e-08%22%20y2%3D%228%22%20stroke%3D%22%230a615a%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E" alt="">
     </p>    
       
    `
    }
});


let faq_p4 = document.querySelector('#faq-p4')
let faqText4 = document.querySelector("#faq4");

faqText4.addEventListener("click", (event) => {
    count++;
    console.log(count)
    if (count % 2 == 0) {
        faq_p4.innerHTML = "";
    } else {
        faq_p4.innerHTML = "";
        // console.log('working');
        faqText4.style.backgroundColor = "white"
        faqText4.style.color = "black"
        faq_p4.innerHTML = `
     <p class="showContent-p"> All our prices are listed in US dollars, but your bank will be able to convert this to your local currency upon purchase. You will also receive your invoice in US dollars. In regards to tax implications, all of our prices do not include applicable state/local taxes and you (the client) will be responsible for them. If you have any questions, please speak to your sales representative and we’ll be happy to help.
     </p>         
    `
    }
});


// wrap unwrap and functionality
// let clickCount = 0;
// let clickdivtoshow = document.querySelectorAll(".showFaqContent")
// let show_p_tag = document.querySelectorAll(".showContent-p");
// console.log(show_p_tag);

// clickdivtoshow.addEventListener = () => {
//     // if (count %2 === 0 ){
//     //     // showfaqConntent.style.display = 'block';
//     //     count++;
//     // }
//     console.log(clickdivtoshow);
// }