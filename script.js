let url='https://api.openweathermap.org/data/2.5/weather'
let api_key= ''
let difKevlin=273.15



document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    const ciudad=document.getElementById('ciudadEntrada').value;
    if(ciudad){
        fetchDatosClima(ciudad)
    }
    
});

function fetchDatosClima(ciudad){
    fetch(`${url}?q=${ciudad}&appid=${api_key}`)
.then(respuesta => respuesta.json())
.then(respuesta => mostrarClima(respuesta))
}

function mostrarClima(respuesta){
    console.log(respuesta)
    const divClima=document.getElementById('datosClima');   
    divClima.innerHTML=''

    const ciudadNombre=respuesta.name
    const paisNombre=respuesta.sys.country
    const temperatura=respuesta.main.temp
    const descripcion=respuesta.weather[0].description
    const ciudadHumedad=respuesta.main.humidity
    const ciudadIcon= respuesta.weather[0].icon

    const ciudadTitulo=document.createElement('h2')
    ciudadTitulo.textContent=`${ciudadNombre}, ${paisNombre}`

    const ciudadTemp=document.createElement('p')
    ciudadTemp.textContent=`La temperatura es de: ${Math.floor(temperatura-difKevlin)}°C` 

    const ciudadDescripcion=document.createElement('p')
    ciudadDescripcion.textContent=`La descripción meteorológica es: ${descripcion}`

    const paisTitulo=document.createElement('p')
    paisTitulo.textContent=paisNombre

    const ciudadH=document.createElement('p')
    ciudadH.textContent=`La humedad es de: ${ciudadHumedad}%`

    const IconInfo=document.createElement('img')
    IconInfo.src=`https://openweathermap.org/img/wn/${ciudadIcon}@2x.png`

    divClima.appendChild(ciudadTitulo)
    divClima.appendChild(ciudadTemp)
    divClima.appendChild(IconInfo)
    divClima.appendChild(ciudadH)
    divClima.appendChild(ciudadDescripcion)
}




