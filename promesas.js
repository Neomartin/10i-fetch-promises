console.time(`start`)
// Creo la variable users
let users;

// Creo una funcion que me devuelve una promesa, es decir algo que se va resolver o NO en un tiempo indefinido pero no de forma instantanea
function loadUser() {
    // Retorno una promesa, las promesas tienen una funcion de callback que tiene 2 parametros un resolve: que se resuelve, y un reject que se rechaza por que al falló
    return new Promise(function(resolve, reject){
        // Genero una demora a través de un timeout de 2s (2000), que cuando hayan pasado voy a darle una valor a users y ademas resolver o rechazar la promesa
        setTimeout(function() {
            users = [
                { name: 1 },
                { name: 2 }
            ];
            //puedo rechazar o resolver la promesa
            // resolve(true)
            reject(`Erorr en la priomesa`)
        }, 2000)
    })
    

}

// Al llamar mi función cuyo return es una promesa, tengo la posibilidad de acceder a los metodos:
//     then: funcion que se va ejecutar si la promesa se resolvió correctamente
//     catch: funcion a ejecutar si la promesa se rechazó
loadUser()

    .then(() => {
        console.log(users)
        users.map(usr => console.log(usr))
    })
    .catch((error) => {
        console.warn(`La promesa se rechazo`, error)
    })

console.timeEnd(`start`)