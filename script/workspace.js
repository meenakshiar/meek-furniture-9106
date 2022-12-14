
document.addEventListener('DOMContentLoaded', () => {
    const country_data_select = document.querySelector('#counties');
    const country_data = document.querySelector('#counties_name');


    fetch('https://restcountries.com/v3.1/all')
        .then(res => { return res.json() })
        .then(data => {
            console.log(data)
            let showData = data.map((item) => {
                let limited_value = (item.idd.suffixes != undefined ? item.idd.suffixes[0] : '0');
                return ` <option value="${item.name.common}">${item.idd.root != undefined ? item.idd.root : '0'}${limited_value.slice(0, 2)}</option>`
            })

            let showName = data.map((item) => {
                // let limited_value = (item.idd.suffixes != undefined ? item.idd.suffixes[0] : '0');
                return ` <option value="${item.name.common}">${item.name.common}</option>`
            })
            // console.log(limited_value.slice(0, 2));

            country_data_select.innerHTML = showData.join(" ");
            country_data.innerHTML = showName.join(" ")
        })
        .catch(err => { console.log(err) })
})




