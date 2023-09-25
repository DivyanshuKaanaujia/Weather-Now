import React, {useState} from 'react'
import axios from 'axios'
import './weatherform.css'
import 'animate.css';
// const TOKEN = require("../../apiToken.js");

export default function Weatherform(props) {

    const search = (event)=>{
        if(event.key === 'Enter'){
            axios.get(url).then((response)=>{
                setText(response.data);
                console.log(response.data);
            })
            setCity("");
        }
    }

    const getDayName =()=>{
        let now = new Date().toLocaleDateString('en-us', { weekday:"long"});
        return now;
    }

    const getTime=()=>{
        const current = new Date();
        const time = current.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          });
        console.log(time);
        return time;
    }
    

//-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|

    
    const [text, setText] = useState('0');
    const [city, setCity] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7678284a4239bc20a54aa1ae93244953`

//-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
  return (
    <>
        <div className="hehe">

            <div className="container-search">

                <div className="search">

                    <input className="form-control " placeholder="Search City"
                    type="search"
                    value={city} 
                    onChange={event => setCity(event.target.value)} 
                    onKeyPress={search}/>

                </div>

            </div>


            <div className="container-result">

                <div className="result-top">

                    <div className="left">

                        <div className="city">
                            {text.main ? <p className='animate__animated animate__fadeIn'>📍{text.name}</p> : null}
                        </div>

                        <div className="temp">
                            {text.main ? <h1 className='animate__animated animate__fadeIn'>{Math.floor(text.main.temp-273)} °C</h1> : null}
                        </div>

                        <div className="feelsLike">
                            {text.main ? <p className='animate__animated animate__fadeIn'>Feels like {Math.round(text.main.feels_like-273)} °C</p> : null}
                        </div>

                    </div>

                    <div className="right">

                        <div className="day">
                            {text.main ? <p className='animate__animated animate__fadeIn'>{getDayName()}, {getTime()}</p> : null}
                        </div>

                        <div className="description">
                            {text.weather ? <h1 className='animate__animated animate__fadeIn'>{text.weather[0].main}</h1> : null}
                        </div>

                        <div className="visibility">
                            {text.main ? <p className='animate__animated animate__fadeIn'>{"Visibility : "+text.visibility}</p> : null }
                        </div>

                    </div>

                </div>

                
                <div className="result-bottom">

                    <div className="valclass-container">
                        <div className="valclass">

                            <div className="val">
                                {text.main ? <p>{text.main.humidity}%</p> : null}
                            </div>

                            <div className="title">
                                Humidity
                            </div>

                        </div>

                        <div className="valclass">

                        <div className="val">
                            {text.wind ? <p>{text.wind.speed}m/s</p> : null}
                        </div>

                        <div className="title">
                            Wind
                        </div>

                        </div>

                        <div className="valclass">

                        <div className="val">
                            {text.clouds ? <p>{text.clouds.all}%</p> : null}
                        </div>

                        <div className="title">
                            Cloud
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>
  )
}
