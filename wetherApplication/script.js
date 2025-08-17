document.getElementById('search-button').addEventListener('click',()=>{
    const place=document.getElementById('location-input').value;

    const promi=fetch(`http://api.weatherapi.com/v1/current.json?key=401759b02d94477da4d153001251708&q=${place}&aqi=yes`);


    function placeinfo(data){
        const locaton=document.getElementById('location-name');
        const temp=document.getElementById('temperature');
        const wethdes=document.getElementById('weather-description');
        const humidity=document.getElementById('humidity');
        const windspeed=document.getElementById('wind-speed');
        locaton.innerHTML=`Place: ${data.location.name}`;
        temp.innerHTML=`${data.current.temp_c}°C`;
        // const img=document.createElement('img');
        const cond=document.getElementById('condition');
        cond.setAttribute('src','//cdn.weatherapi.com/weather/64x64/day/113.png');
        // temp.insertAdjacentElement('afterend',img);
        wethdes.innerHTML=`Weather description:${data.current.condition.text}`;
        
        humidity.innerHTML=`humidity:${data.current.humidity}%`;
        windspeed.innerHTML=`Wind:${data.current.wind_kph} kph`;
    

    }


    promi.then((res)=>{
        return res.json();
    }).then((data)=>{
        placeinfo(data);
    }).catch((err)=>{
        window.alert("enter valid state or country");
    })
})