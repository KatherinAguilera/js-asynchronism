// Requerir desde node isntalada la dependencia xmlhttprequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Api 
let API = 'https://rickandmortyapi.com/api/character/'
//crear una funcion para traer la informacion desde la api 
function fetchData(url_api, callback){
  // Se instancia el objeto a una variable
  let xhttp = new XMLHttpRequest();

  /*Tipo Petición a enviar (metodo, url y valor true para asegurar asincronismo
    true: las notificaciones de cambios y final de petición serán manejadas por listener de eventos
    false: metodo send() solo retornara respuesta al final de la petición */
  xhttp.open('GET', url_api, true)

  // Escuchar el cambio de acciones durante el envio de petición
  xhttp.onreadystatechange = function (event){
    //validar state finalizado 4 y status 200 para ejecución de acciones
    if(xhttp.readyState === 4 && xhttp.status === 200){
      //ejecutar callback para parsear string resultante a json
        callback(null, JSON.parse(xhttp.responseText))
    } 
    else {
   //Si no se cumplen las condicion es del if entonces retornará error callback
        const error = new Error('Error' + url_api);
        return callback(error, null)
      }
    }
    xhttp.send();

  }
  //Se ejecuta llamado de petición

  //  data1 data2 data3 datos de forma anidada
  fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3,data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});