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

            country_data_select.innerHTML = showData.join(" ");
            country_data.innerHTML = showName.join(" ")
        })
        .catch(err => { console.log(err) })
})


//==================================== register option==========================================
// pageOne();

function temp() {
    let get_data = JSON.parse(localStorage.getItem('data'));

    let submit_btn = document.querySelector('.next_button');

    submit_btn.addEventListener('click', (event) => {
        event.preventDefault();
        let name = document.getElementById('name').value || alert('Please fill the form first');
        let countryCode = document.getElementById('counties').value || alert('Please fill the form first');
        let phone = document.getElementById('number').value || alert('Please fill the form first');
        let companyName = document.getElementById('Company-Name').value || alert('Please fill the form first');
        let countyName = document.getElementById('counties_name').value || alert('Please fill the form first');
        let Username = document.getElementById('Username').value || alert('Please fill the form first');
        let Password = document.getElementById('Password').value || alert('Please fill the form first');

        // console.log(countryCode)

        let details = {
            Name: name,
            Phone: countryCode + phone,
            Company_Name: companyName,
            county_Name: countyName,
            Username,
            Password
        };

        localStorage.setItem('data', JSON.stringify(details));
        console.log(details);
        // RegisterNewUser(details);
        window.location.href = 'workspace-page-2.html';

    })

}
//=============================================================================================================
function secondPage() {
    let get_data = JSON.parse(localStorage.getItem('data'))

    let submit_btn_2nd = document.querySelector('.next_button2');
    submit_btn_2nd.addEventListener('click', (event) => {
        event.preventDefault();
        let team = document.getElementById('team').value || alert('Please fill the details first');
        let job_role = document.getElementById('Job_role').value || alert('Please fill the details first');

        let details = {
            team,
            Job_role: job_role,
            ...get_data
        };
        console.log(details);
        localStorage.setItem('data', JSON.stringify(details));
        // RegisterNewUser(details);
        window.location.href = 'workspace-page-3.html';

    });
}

//================================================================================================================
function pagethree() {
    let get_data = JSON.parse(localStorage.getItem('data'))
    let submit_btn_3rd = document.querySelector('.next_button3');
    submit_btn_3rd.addEventListener('click', (event) => {
        event.preventDefault();
        let space = document.getElementById('space').value || alert('Please fill the details first');

        let details = {
            space,
            ...get_data
        };
        localStorage.setItem('data', JSON.stringify(details));
        window.location.href = 'workspace-page-4.html';

    });
}

//===============================================================================================================
function pageFour() {
    let get_data = JSON.parse(localStorage.getItem('data'))
    let submit_btn_4th = document.querySelector('.next_button4');
    submit_btn_4th.addEventListener('click', (event) => {
        event.preventDefault();
        let project = document.getElementById('project').value || alert('Please fill the details first');

        let details = {
            project,
            ...get_data
        };
        localStorage.setItem('data', JSON.stringify(details));
        window.location.href = 'workspace-page-5.html';

    });
}

//===============================================================================================================
function pageFive() {
    let get_data = JSON.parse(localStorage.getItem('data'))
    let submit_btn_5th = document.querySelector('.next_button5');
    submit_btn_5th.addEventListener('click', (event) => {
        event.preventDefault();
        let First_Task = document.getElementById('First_Task').value || alert('Please fill the details first');
        let Second_Task = document.getElementById('Second_Task').value || alert('Please fill the details first');
        let Third_Task = document.getElementById('Third_Task').value || alert('Please fill the details first');

        let details = {
            First_Task,
            Second_Task,
            Third_Task,
            ...get_data
        };
        localStorage.setItem('data', JSON.stringify(details));
        window.location.href = 'workspace-page-6.html';

    });
}

//===============================================================================================================
function pageSix() {
    let get_data = JSON.parse(localStorage.getItem('data'))
    let submit_btn_6th = document.querySelector('.next_button6');
    submit_btn_6th.addEventListener('click', (event) => {
        event.preventDefault();
        let This_week = document.getElementById('This_week').value || alert('Please fill the details first');
        let Next_month = document.getElementById('Next_month').value || alert('Please fill the details first');
        let Next_year = document.getElementById('Next_year').value || alert('Please fill the details first');

        let details = {
            This_week,
            Next_month,
            Next_year,
            ...get_data
        };
        localStorage.setItem('data', JSON.stringify(details));
        RegisterNewUser(details);

    });
}


//=================================================================================================================

// For creating new User 
async function RegisterNewUser(details) {
    try {
        let Register_new_user = await fetch('https://6399f35116b0fdad774f2f63.mockapi.io/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        });
        console.log(Register_new_user);
        if (Register_new_user.ok === true) {
            alert('User has been created');
        }

    } catch (error) {
        alert('Bad request');
    }
}
// ======================================valid a phone number id======================================================

function validation(elem) {
    document.getElementById('res').style.color = 'red';
    if (isNaN(elem.value)) {
        document.getElementById('res').innerText = 'Please Enter Numbers only';
    } else {
        document.getElementById('res').innerText = '';
        if (elem.value.length > 10) {
            document.getElementById('res').innerText = 'Please Enter Ten digit Number';
            document.getElementById('res').style.color = 'orange';
        } else if (elem.value.length < 10 && elem.value.length >= 1) {
            document.getElementById('res').innerText = 'Please Enter Ten digit Number'
            document.getElementById('res').style.color = 'orange';
        } else {
            document.getElementById('res').innerText = '';
        }
    }
}

// ===============================================valid a mail id=========================================

function validationMail() {
    // var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

}