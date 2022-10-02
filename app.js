

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

function showNotification() {
  Notification.requestPermission((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Weather Gossip Notification", {
          body: "Weather update",
          icon: "./assets/thermometer.jpg",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}

// setInterval(showNotification(),6000)
showNotification();




 navigator.geolocation.getCurrentPosition(
    function (location1){
        var lat = location1.coords.latitude;
        var lon = location1.coords.longitude;
        var arrynav = [lat,lon];
        window.localStorage.setItem("lat" , lat)
        window.localStorage.setItem("long" , lon)
        
        
    }
)

    

var temp = document.getElementById('tempid');
var city = document.getElementById('namecity');
var time = document.getElementById('timeid');
var day = document.getElementById('dayid');
var month = document.getElementById('month');
var date = document.getElementById('date');
var cloud = document.getElementById('cloud');
var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var wind = document.getElementById('wind');
var search = document.getElementById('askcity');
var image = document.getElementById('imgicon');
var contain1 = document.getElementById('contain1');


function value1 (){
  event.preventDefault()
  if (search.value === ""){
    swal("ERROR", "Enter City Name!", "error");
  }else if(askcity.value !== ""){
    const getData = new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=7777de22963359d0d7ee097114ad3a5e&units=metric`
      )
        .then((res) => res.json())
        .then((res) => {
          temp.innerHTML=(res.main.temp + `&#176`);
          city.innerHTML=(res.name);
          humidity.innerHTML=("Humidity = " + res.main.humidity + "%");
          pressure.innerHTML=("pressure = " + res.main.pressure + "hPa");
          wind.innerHTML=("wind = " + (res.wind.speed * 3.6).toFixed(1) + "Km/h");
          cloud.innerHTML=( res.weather[0].main );
          let clouded = cloud.innerHTML;
          console.log(clouded)

          if(clouded.toLocaleLowerCase() == "smoke"){
            // alert("ook")
            image.src = "assets/haze.png";
            contain1.style.backgroundImage = "url('assets/smokyred.avif')"
           }else if(clouded.toLocaleLowerCase()  == "sunny"){
            image.src = "assets/sun.png";
            contain1.style.backgroundImage = "url('assets/sunnytree.avif')"
           }else if(clouded.toLocaleLowerCase()  == "rain"){
            image.src = "assets/rain.png"
            contain1.style.backgroundImage = "url('assets/raindroplts.jpg')"
           }else if(clouded.toLocaleLowerCase() == "clear"){
            image.src = "assets/clear.png";
            contain1.style.backgroundImage = "url('assets/blueback.avif')"
            // contain1.style.color = "black"
           }else if(clouded.toLocaleLowerCase() == "clouds"){
            image.src = "assets/clouds.png";
            contain1.style.backgroundImage = "url('assets/cloudparty.jpg')"
           }else if(clouded.toLocaleLowerCase() == "strom"){
            image.src = "assets/strom.png";
            contain1.style.backgroundImage = "url('assets/rainroad.jpg')"
           }else if(clouded.toLocaleLowerCase() == "dust"){
            image.src = "assets/dry.png"
            contain1.style.backgroundImage = "url('assets/sunnyblow.jpg')"
           }else if(clouded.toLocaleLowerCase() == "haze"){
            image.src = "assets/dust.png";
            contain1.style.backgroundImage = "url('assets/dustblow.avif')"
           }
           extar()

        })
        .catch((err) => {
          swal("ERROR", "City Not Found!", "error")
        });
    });
  

  }
};

// value12()


var latwe = window.localStorage.getItem("lat") 
var longwe = window.localStorage.getItem("long") 
console.log(latwe)


function wearehere (){
  let loader = document.getElementById('loader')
  loader.style.display = "none";
  let container = document.getElementById('contain1')
  container.style.display = "block"
const getData = new Promise((resolve, reject) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latwe}&lon=${longwe}&appid=7777de22963359d0d7ee097114ad3a5e&units=metric`
  )
    .then((res) => res.json())
    .then((res) => {
      temp.innerHTML=(res.main.temp + `&#176`);
          city.innerHTML=(res.name);
          humidity.innerHTML=("Humidity = " + res.main.humidity + "%");
          pressure.innerHTML=("pressure = " + res.main.pressure + "hPa");
          wind.innerHTML=("wind = " + (res.wind.speed * 3.6).toFixed(1) + "Km/h");
          cloud.innerHTML=( res.weather[0].main );
          let clouded = cloud.innerHTML;
          console.log(clouded);

          if(clouded.toLocaleLowerCase() == "smoke"){
            // alert("ook")
            image.src = "assets/haze.png";
            contain1.style.backgroundImage = "url('assets/smokyred.avif')"
           }else if(clouded.toLocaleLowerCase()  == "sunny"){
            image.src = "assets/sun.png";
            contain1.style.backgroundImage = "url('assets/sunnytree.avif')"
           }else if(clouded.toLocaleLowerCase()  == "rain"){
            image.src = "assets/rain.png"
            contain1.style.backgroundImage = "url('assets/raindroplts.jpg')"
           }else if(clouded.toLocaleLowerCase() == "clear"){
            image.src = "assets/clear.png";
            contain1.style.backgroundImage = "url('assets/blueback.avif')"
            // contain1.style.color = "black"
           }else if(clouded.toLocaleLowerCase() == "clouds"){
            image.src = "assets/clouds.png";
            contain1.style.backgroundImage = "url('assets/cloudparty.jpg')"
           }else if(clouded.toLocaleLowerCase() == "strom"){
            image.src = "assets/strom.png";
            contain1.style.backgroundImage = "url('assets/rainroad.jpg')"
           }else if(clouded.toLocaleLowerCase() == "dry"){
            image.src = "assets/dry.png"
            contain1.style.backgroundImage = "url('assets/sunnyblow.jpg')"
           }else if(clouded.toLocaleLowerCase() == "dust"){
            image.src = "assets/dust.png";
            contain1.style.backgroundImage = "url('assets/dustblow.avif')"
           }

          extar()
    })
    .catch((err) => reject(err));
});



 extar()
};


setTimeout(wearehere,5000)

function extar (){

 let montharr = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
 let dayarr = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
 let timesss = new Date();
 day.innerHTML =(dayarr[timesss.getDay()])
 month.innerHTML=(montharr[timesss.getMonth()])
 date.innerHTML=(timesss.getDate());
 time.innerHTML=(timesss.getHours() + ":" + timesss.getMinutes());
}