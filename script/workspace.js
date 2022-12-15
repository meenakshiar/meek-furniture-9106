document.addEventListener('DOMContentLoaded', () => {
    const country_data_select = document.querySelector('#counties');
    const country_data = document.querySelector('#counties_name');


    fetch('https://restcountries.com/v3.1/all')
        .then(res => { return res.json() })
        .then(data => {
            // console.log(data)
            let showData = data.map((item) => {
                let limited_value = (item.idd.suffixes != undefined ? item.idd.suffixes[0] : '0');
                return ` <option value="${item.idd.root != undefined ? item.idd.root : '0'}">${item.idd.root != undefined ? item.idd.root : '0'}${limited_value.slice(0, 2)}</option>`
            })

            let showName = data.map((item) => {
                return ` <option value="${item.name.common}">${item.name.common}</option>`
            })
            // console.log(limited_value.slice(0, 2));

            country_data_select.innerHTML = showData.join(" ");
            country_data.innerHTML = showName.join(" ")
        })
        .catch(err => { console.log(err) })
})


//==================================== register option==========================================



let submit_btn = document.querySelector('.next_button');

submit_btn.addEventListener('click', (event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let countryCode = document.getElementById('counties').value;
    let phone = document.getElementById('number').value;
    let companyName = document.getElementById('Company-Name').value;
    let countyName = document.getElementById('counties_name').value;
    // console.log(countryCode)
    let details = {
        Name: name,
        Phone: countryCode + phone,
        Company_Name: companyName,
        county_Name: countyName,
    };
    // console.log(details);
    RegisterNewUser(details)

})

// For creating new User 
async function RegisterNewUser(details) {
    try {
        let Register_new_user = await fetch('http://localhost:3000/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        });
        console.log(Register_new_user);
        if (Register_new_user.ok === true) {
            alert('User has been created');
            // window.location.href = '#tologin';
        }

    } catch (error) {
        alert('Bad request');
    }
}