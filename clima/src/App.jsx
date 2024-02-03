import React, { useEffect, useState } from "react";



const App = () => {
  const [ciudad, setCiudad,] = useState('puebla')
  const[lat, setLat] = useState(0);
  const[lon, setLon] = useState(0);
  


  const getGeocodinfdata = async(ciudad,pais,limite) => {
    const api_key = 'e836ef2d51d7c079bb635f037879e0b5'
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=${limite}5&appid=${api_key}` ;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCiudad(data[0].name)
      setLat(data[0].lat)
      setLon(data[0].lon)
    } catch (error){
      console.log(error); 
    }
  }


  const getWheatherData = async (lat,lon) => {
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
    try{
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    }catch (error){
      console.log(error)
    }
  }


  useEffect(() => {
    getGeocodinfdata('puebla', 'MX', 2)
    getWheatherData(lat, lon)
  }, [])
  

  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-md-8 col-lg-6">
        <div className='card card-secondary'>
        <div className='card-header'>
          <h3 className='card-title'>Ciudad {ciudad}</h3>
        </div>
        <div className='card-body'>
          <p>
            Lorem ipsum 
          </p>
        </div>
        <div className='card-footer'>
          <button className='btn bg-olive btn-lg float-right'>Aceptar</button>
          <button className="btn bg-navy btn-lg">Cancelar</button>
        </div>
      </div>

        </div>

        <div className=" col-xs-12 col-md-8 col-log-9">


        </div>
      </div>
    </>
  )
}

export default App;