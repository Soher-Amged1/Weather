let Data=[]
let cityL=[]
let weatherList=[]
let searchCity=document.getElementById("searchCity")
let searchBtn =document.getElementById("searchBtn")
search("cairo")

async function search(city=''){
   
    let myReqCity=await fetch (`https://api.weatherapi.com/v1/search.json?key=d34b79256764423a820230606230608&q=${city}`)

   let DataCity =await myReqCity.json()
   cityL=DataCity
   console.log(cityL)
   cityResult=cityL[0].name

    
    
   getData(cityResult)
}
searchBtn.addEventListener("click", function (a){
    let city=searchCity.value
    search(city)
});
async function getData(city){
    let myReq= await fetch (`https://api.weatherapi.com/v1/forecast.json?key=d34b79256764423a820230606230608&q=${city}&days=7`)
    Data =await myReq.json()
    weatherList=Data.forecast
    console.log(weatherList)
    display()

}




function display(){
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date(weatherList.forecastday[0].date);
let dayName = days[d.getDay()];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var now = new Date(d);
let MonthDate=months[now.getMonth()]
let Day = weatherList.forecastday[0].date
let MonthDay = Day.split("-");
let index=days.indexOf(dayName)
if(index==days.length){
    index=0
}
else{
    index=index+1
}
let Day2=days[index]
let Day3=days[index+1]
    let temp=""
        temp +=   `<div class="table-responsive">   
        <table class="table-responsive-md table table-bordered table-dark table-striped-columns">
        <thead>
          <tr class="text-muted">
            <th><h5>${dayName}</h5> <h6><span class="">${MonthDay[2]+MonthDate}</h6>
            </th>
            <th class="text-center">${Day2}
            </th>
            <th class="text-center">${Day3}
            </th>
          </tr>
        </thead>
        <tbody class="">
        <div class="row">
          <tr>
            <td class="p-3">${Data.location.name} 
            <h2 class="fs-1 my-4">${weatherList.forecastday[0].day.maxtemp_c} <img  class="icons float-end" src="https://${weatherList.forecastday[0].day.condition.icon}"></h2>  <h4 class="text-info">${weatherList.forecastday[0].day.condition.text}</h4>
                <h5><span></span> <span></span> <span></span> <span></span></h5>
            </td>

            <td class="text-center py-5"><h4><img class="icons" src="https://${weatherList.forecastday[1].day.condition.icon}"></h4> <h4>${weatherList.forecastday[1].day.maxtemp_c}</h4> <h4>${weatherList.forecastday[1].day.mintemp_c}
                     </h4> <span class="text-info">${weatherList.forecastday[1].day.condition.text}</span>
            </td>

            <td class="text-center py-5"><h4><img class="icons" src="https://${weatherList.forecastday[2].day.condition.icon}"></h4> <h4>${weatherList.forecastday[2].day.maxtemp_c}</h4> <h4>${weatherList.forecastday[2].day.mintemp_c}
                     </h4> <span class="text-info">${weatherList.forecastday[2].day.condition.text}</span>
            </td>
                
        </tr>
        </div>
         
    
        </tbody>
  
  </table></div>`
  document.getElementById("Weather-row").innerHTML=temp

    }

