// algo va a pasar
const sometimesWillHappen = () => {
  // si se resuelve o es rechazada
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('hey!')
    } else {
      reject('Whooooops')
    }
  })
}

// ejecucion de la promesa

sometimesWillHappen()
  .then(response => console.log(response))
  .catch(err => console.log(err))



const sometimesWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Es verdadero')
      }, 2000)
    } else {
      const error = new Error('Ocurrio un error')
      reject(error)

    }
  })
}

sometimesWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err))



  // Ejecutar las dos promesas anteriores
  
  Promise.all([sometimesWillHappen(),sometimesWillHappen2()])
  .then( response => {
    console.log('Array of results', response)
  })
  .catch(err => {
    console.log(err)
  })

// Resultado:

// hey!
// Es verdadero
// Array of results [ 'hey!', 'Es verdadero' ]