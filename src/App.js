import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ViewWeather from "./components/ViewWeather";

function App() {
  let [weather, setWeather] = useState({});
  let [showWeather, setShowWeather] = useState(false);

  const getWeather = input => {
    input = input.replace(/[ ]/g, '%20');

    let api = "https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=572989a5120c18166678e383575540b6";

    fetch(api)
    .then(response => response.json())
    .then(data => {
      setWeather(data);
      setShowWeather(true);
    })    
  }      

  return (
    <div className="container">
      <Header title="Weather App" />
      <div className="row m-4 bg-dark p-4">
        <div className="col-6 bg-light p-4">
          <Form 
            search={getWeather}
          />
        </div>
        <div className="col-6 bg-light p-4">
          {
            showWeather ?
              <ViewWeather 
                weather={weather}
              /> :
            null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
