function weather() {
    var cityName = document.getElementById("input").value;
     
    var APIKey = '021841d914d80fc618423e5c72280838';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`)
      .then(function (response) {
        console.log(response.data);
        document.getElementById("heading3").innerHTML=`current  MIN-Temperature is ${response.data.main.temp_min}°C`
        document.getElementById("heading2").innerHTML=`current  MAX-Temperature is ${response.data.main.temp_max}°C`
        document.getElementById("heading").innerHTML=`current Temperature is ${response.data.main.temp}°C`
        document.getElementById("heading4").innerHTML=`PLACE NAME : ${response.data.name}`
        document.getElementById("heading5").innerHTML="DETAIL"
        var check= document.getElementById("pic").src=`${response.data.weather[0].icon}`;
        document.getElementById("pic").src=`https://openweathermap.org/img/wn/${check}@2x.png`;

        /////////////////////////////second DIv
        
        document.getElementById("second1").innerHTML=`HUMIDITY IS : ${response.data.main.humidity}`

      })
      .catch(function (error) {
        console.log(error);
      })

  }