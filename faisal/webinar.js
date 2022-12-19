let data = [
    {
        "special": "ASK THE EXPERTS",
        "tittle": " Award-Winning Versatility for Marketers Everywhere",
        "img": " https://web-static.wrike.com/tp/storage/uploads/e02c3cc2-0058-44c4-980b-ed3e29ae9425/wrike-webinar-fr-marketing-2x.png",
        "description": "Join us for this exciting webinar, where we’ll showcase Wrike’s exceptional versatility and deliver expert tips that’ll make every marketer’s life easier."
    },
    {
        "special": "CUSTOMER SPOTLIGHT",
        "tittle": " What gets measured, gets done: Supercharging your marketing ROI for success",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-31-2x.png",
        "description": "When running multiple marketing campaigns, it's essential to be able to sift through the data to identify which ones contributed directly to your bottom line."
    },
    {
        "special": "MARKETING AND CREATIVE",
        "tittle": "The Texas Rangers Deliver Home-Run Campaigns With Wrike",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-66-2x.png",
        "description": "The number of tools that enable marketers to work in the digital world is constantly increasing, leading to disparate information and requests that slow progress and leave clients disappointed. Discover exactly how the TX Rangers marketing team overcame the issue with Wrike to deliver home-run campaigns."
    },
    {
        "special": "ASK THE EXPERTS",
        "tittle": " Award-Winning Versatility for Marketers Everywhere",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-66-2x.png",
        "description": "Join us for this exciting webinar, where we’ll showcase Wrike’s exceptional versatility and deliver expert tips that’ll make every marketer’s life easier."
    },
    {
        "special": "CUSTOMER SPOTLIGHT",
        "tittle": " What gets measured, gets done: Supercharging your marketing ROI for success",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-04-2x.png",
        "description": "When running multiple marketing campaigns, it's essential to be able to sift through the data to identify which ones contributed directly to your bottom line."
    },
    {
        "special": "MARKETING AND CREATIVE",
        "tittle": "The Texas Rangers Deliver Home-Run Campaigns With Wrike",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-31-2x.png",
        "description": "The number of tools that enable marketers to work in the digital world is constantly increasing, leading to disparate information and requests that slow progress and leave clients disappointed. Discover exactly how the TX Rangers marketing team overcame the issue with Wrike to deliver home-run campaigns."
    },
    {
        "special": "ASK THE EXPERTS",
        "tittle": " Award-Winning Versatility for Marketers Everywhere",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-06-2x.png",
        "description": "Join us for this exciting webinar, where we’ll showcase Wrike’s exceptional versatility and deliver expert tips that’ll make every marketer’s life easier."
    },
    {
        "special": "CUSTOMER SPOTLIGHT",
        "tittle": " What gets measured, gets done: Supercharging your marketing ROI for success",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-31-2x.png",
        "description": "When running multiple marketing campaigns, it's essential to be able to sift through the data to identify which ones contributed directly to your bottom line."
    },
    {
        "special": "MARKETING AND CREATIVE",
        "tittle": "The Texas Rangers Deliver Home-Run Campaigns With Wrike",
        "img": " https://web-static.wrike.com/tp/storage/uploads/9ffe919e-545f-41fc-bb66-e2a858640981/webinar-versatility-custom-item-types-2x.png",
        "description": "The number of tools that enable marketers to work in the digital world is constantly increasing, leading to disparate information and requests that slow progress and leave clients disappointed. Discover exactly how the TX Rangers marketing team overcame the issue with Wrike to deliver home-run campaigns."
    },
    {
        "special": "ASK THE EXPERTS",
        "tittle": " Award-Winning Versatility for Marketers Everywhere",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-02-2x.png",
        "description": "Join us for this exciting webinar, where we’ll showcase Wrike’s exceptional versatility and deliver expert tips that’ll make every marketer’s life easier."
    },
    {
        "special": "CUSTOMER SPOTLIGHT",
        "tittle": " What gets measured, gets done: Supercharging your marketing ROI for success",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-59-2x.png",
        "description": "When running multiple marketing campaigns, it's essential to be able to sift through the data to identify which ones contributed directly to your bottom line."
    },
    {
        "special": "MARKETING AND CREATIVE",
        "tittle": "The Texas Rangers Deliver Home-Run Campaigns With Wrike",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-31-2x.png",
        "description": "The number of tools that enable marketers to work in the digital world is constantly increasing, leading to disparate information and requests that slow progress and leave clients disappointed. Discover exactly how the TX Rangers marketing team overcame the issue with Wrike to deliver home-run campaigns."
    },
    {
        "special": "ASK THE EXPERTS",
        "tittle": " Award-Winning Versatility for Marketers Everywhere",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-64-2x.png",
        "description": "Join us for this exciting webinar, where we’ll showcase Wrike’s exceptional versatility and deliver expert tips that’ll make every marketer’s life easier."
    },
    {
        "special": "CUSTOMER SPOTLIGHT",
        "tittle": " What gets measured, gets done: Supercharging your marketing ROI for success",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-31-2x.png",
        "description": "When running multiple marketing campaigns, it's essential to be able to sift through the data to identify which ones contributed directly to your bottom line."
    },
    {
        "special": "MARKETING AND CREATIVE",
        "tittle": "The Texas Rangers Deliver Home-Run Campaigns With Wrike",
        "img": " https://web-static.wrike.com/tp/storage/uploads/rebrand-webinar-cover-44-2x.png",
        "description": "The number of tools that enable marketers to work in the digital world is constantly increasing, leading to disparate information and requests that slow progress and leave clients disappointed. Discover exactly how the TX Rangers marketing team overcame the issue with Wrike to deliver home-run campaigns."
    }
]
displaymain(data)
function displaymain(data) {
    document.querySelector("#main").innerHTML = ""
    data.forEach((ele) => {
        let div = document.createElement("div")
        div.classList.add("mylist")

        let img = document.createElement("img")
        img.setAttribute("src", ele.img)

        let spec = document.createElement("p")
        spec.innerText = ele.special

        let name = document.createElement("h3")
        name.innerText = ele.tittle

        let des = document.createElement("p")
        des.innerText = ele.description


        div.append(img, spec, name, des)
        document.querySelector("#main").append(div)

    });

}

let butt1 = document.querySelector("button")
butt1.addEventListener("click", func)
function func() {
    displaymain1(data)
    function displaymain1(data) {
        document.querySelector("#main1").innerHTML = ""
        data.forEach((ele) => {
            let div = document.createElement("div")
            div.classList.add("mylist")

            let img = document.createElement("img")
            img.setAttribute("src", ele.img)

            let spec = document.createElement("p")
            spec.innerText = ele.special

            let name = document.createElement("h3")
            name.innerText = ele.tittle

            let des = document.createElement("p")
            des.innerText = ele.description

            div.append(img, spec, name, des)
            document.querySelector("#main1").append(div)

        });

    }

}

function jaoHomePagePe() {
    window.location.href = '/index.html'
}

function redirectbtn() {
    window.location.href = "/vishal/html/workspace-page-1.html"
}

let ser = document.querySelector("#search")
let west = document.querySelector("i")

west.addEventListener("click", myfunc)

function myfunc() {
    ser.innerHTML = ""
    ser.innerHTML = `<input  onchange="mychange()" type="text" placeholder="Search.." name="search">`
}


function mychange() {
    let mydata = document.querySelector("input").value
    let newarr = data.filter((ele) => {
        return ele.special.toLowerCase().includes(mydata.toLowerCase()) || ele.tittle.toLowerCase().includes(mydata.toLowerCase())
    })
    displaymain(newarr)
}
mychange()


function myfunc2() {
    var a = document.querySelector(".mylist")

    window.location = "video.html"
}
myfunc2()
function myfunc8() {
    let c = document.querySelector("#top")

    window.location = "description.html"
}
myfunc8()

