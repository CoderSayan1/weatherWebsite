

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd8ddffc0b8msh81159e8b64d6224p1a75b7jsn2f062899fc39',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		
		temp.innerHTML = response.temp
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		cloud_pct.innerHTML = response.cloud_pct 
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		wind_speed.innerHTML = response.wind_speed

		var rise = new Date(response.sunrise).toLocaleString(`${city}`,{ hour: 'numeric', minute: 'numeric', hour12: true })
		sunrise.innerHTML = rise
		var set = new Date(response.sunset).toLocaleString(`${city}`,{ hour: 'numeric', minute: 'numeric', hour12: true })
		sunset.innerHTML = set
		
		
	})
	// .catch(err => console.error(err));
}


submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		west_temp.innerHTML = response.temp
		west_wind.innerHTML = response.wind_speed
		west_humi.innerHTML = response.humidity
		west_feels.innerHTML = response.feels_like
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		mumbai_temp.innerHTML = response.temp
		mumbai_wind.innerHTML = response.wind_speed
		mumbai_humi.innerHTML = response.humidity
		mumbai_feels.innerHTML = response.feels_like
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		delhi_temp.innerHTML = response.temp
		delhi_wind.innerHTML = response.wind_speed
		delhi_humi.innerHTML = response.humidity
		delhi_feels.innerHTML = response.feels_like
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=odisha', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		odisha_temp.innerHTML = response.temp
		odisha_wind.innerHTML = response.wind_speed
		odisha_humi.innerHTML = response.humidity
		odisha_feels.innerHTML = response.feels_like
})


