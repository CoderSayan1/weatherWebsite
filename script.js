

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


		function formatAMPM(UNIX_timestamp) {

			var date = new Date(UNIX_timestamp * 1000);
		
			var hours = date.getHours();
			var minutes = date.getMinutes();
		
			var ampm = hours >= 12 ? 'pm' : 'am';
			hours = hours % 12;
			hours = hours ? hours : 12;
			minutes = minutes < 10 ? '0' + minutes : minutes;
			var strTime = hours + ':' + minutes + ' ' + ampm;
		
			return strTime;
		}
		sunrise.innerHTML = formatAMPM(response.sunrise);
		sunset.innerHTML = formatAMPM(response.sunset);
		// console.log(formatAMPM(response.sunrise));
		// console.log(formatAMPM(response.sunset));
		
		
		
	})
	// .catch(err => console.error(err));
}


submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

// getWeather("Delhi")

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


