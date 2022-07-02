console.log('client side javascript')

const locForm = document.querySelector('form');
const search = document.querySelector('input')
const error = document.querySelector('#error');
const forcast = document.querySelector('#forcast')

locForm.addEventListener('submit', (e) => {
    e.preventDefault()
    error.textContent = "Loading..."
    forcast.textContent = "";
    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.err) {
                error.textContent = data.err;
                console.log(data.err)
            }
            else {
                forcast.innerHTML = "Temperature: " + data.Temperature + "<br>";
                forcast.innerHTML += "Address: " + data.Address;
                error.textContent ="";
                console.log("Temparature: " + data.Temperature);
                console.log("Location: " + data.Address);
            }
        })
    })

})