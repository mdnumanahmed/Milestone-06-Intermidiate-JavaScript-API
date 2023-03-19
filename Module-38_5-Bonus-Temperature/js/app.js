const API_KEY = 'c38292bb3390216f2fb07a5a995fc7c9'
let cityName = document.getElementById('city')
let temperature = document.getElementById('temperature')

const loadTemperature = async (city) => {
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    try{
        const res = await fetch(url)
        const data = await res.json()
        if(data){
            displayTemperature(data)
        }
    }catch(error){
        console.log(error);
    }
}

const displayTemperature = (data) => {
    console.log(data);
    temperature.innerText = data.main.temp
}

const searchCity = document.getElementById('searchCity')
searchCity.addEventListener('keyup', function(e){
    e.preventDefault()
    if(e.key === 'Enter'){
        const city = e.target.value 
        loadTemperature(city)
        cityName.innerText = city
    }
})

// loadTemperature('Sylhet')