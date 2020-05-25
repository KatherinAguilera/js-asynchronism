// Requerir desde node isntalada la dependencia xmlhttprequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//crear una funcion para traer la informacion desde la api 
function fetchData(url_api, callback){
  // Se instancia el objeto a una variable
  let xhtpp = new XMLHttpRequest()

  /*Tipo Petición a enviar (metodo, url y valor true para asegurar asincronismo
    true: las notificaciones de cambios y final de petición serán manejadas por listener de eventos
    false: metodo send() solo retornara respuesta al final de la petición */
  xhtpp.open('GET', url_api, true)

  // Escuchar el cambio de acciones durante el envio de petición
  xhtpp.onreadystatechange = function (event){
    //validar state finalizado 4 y status 200 para ejecución de acciones
    if(xhtpp.readyState === 4 && xhtpp.status === 200){
      //ejecutar callback para parsear string resultante a json
        callback(null, JSON.parse(xhtpp.responseText))
    } 
    else {
   //Si no se cumplen las condicion es del if entonces retornará error callback
        const error = newError('Error' + url_api)
        return callback(error, null)
      }
    }
  }
  //Se ejecuta llamado de petición
  xhtpp.send()