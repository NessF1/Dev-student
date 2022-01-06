//tipos de datos
//"hello world" // string
//'hello world' // string igual, comillas dobles o simples 
//Ejemplo'I'am' excepcion
//1000000 // number
//-2.3

//dato boolean "datos logicos"
//true
//false
//array "arreglo' Sirve para guardar varios datos
//['joe', 'ryan', ' martha']
//[1,2,3]
//[true,false,true,false]

//object "representacion abstracta de un objeto en la vida real" Ej.: Usuario
//'ryan' // nombre
//70.4 // puntuacion en juego online
//14 // horas jugando
//true // jugador pro
// para almacenar todos los datos de este usuario debo usar llaves
// un objeto debe contiene una variable y un valor

//object

//{
  //  "username": 'ryan',
  //  "score": 70.4,
  //  "hours":14,
  //  "Professional": true,
    //"friends":['1','2','3','etc'] Listado de amigos

//}

//{
  //  "username": 'ryan',
  //  "score": 0.4,
  //  "hours":1,
  //  "Professional": false,  
//}

//Creacion de objeto con console.log y llaves {}

//console.log({"username": "ryan",
//"score":70.4,});

// Tipos de variables en JS  
// por ejemplo para demostrar la puntuacion final del usuario.
// se almacena toda su informacion en una variable
// o un cliente de banco el dinero de su cuenta suma o resta dinero
// o facebook cuando recuerda usario cotrasena etc

//var nameuser = "john" // 45::55 Variable puede cambiar
//let lastname = "carter" // var y let tienen diferencias en el alcance de la variable
//console.log(nameuser);
//console.log (lastname);

//nameuser = 'pepe';

//const PI = 3.1415; //contantes funciona igual que las variables, pero no permite cambios
//PI= 100;
// por ejemplo si se tiene un usuario con su id

//const id = 'user1'; // no cambiara porque el codigo lo define constante

//console.log(PI)

//let name = 'gordon';

//camelcase muy comun

//let userName = 'gordon'

//Operadores 1:02:12'+' '-' '*' '/' '<,>' '<=' '>=' '==' '!='

//let numberOne = 60;
//let numberTwo = 100;

//let result = numberOne + numberTwo;

//Concatenacion colocar juntos dos strings

//let name = 'John';
//let lastName = 'carter';

//let completeName = name + ' ' + lastName;

//console.log(completeName);

//Para comparar valores

//let numberOne = 100;
//let numberTwo = 500;

//let result = numberOne < numberTwo

//console.log(result); // nos da un booleano false o true

// Por ejemplo una pagina como facebook

//let passwordDB = 'pepe123'

//let input = 'asd'

//let result = input == passwordDB // al hacer la comparacion nos da false debido a que no coincide y no permite el acceso

//console.log(result)


// Condicionales Permiten el control de flujo

//let passwordDB = 'pepe123'

//let input = 'pepe13'

//let result = input == passwordDB;

//=== es una comparacion mas fuerte
// else es para segunda opcion

//if (result === true) {

  //console.log('Login Correcto');

//} //else {

  //console.log ('contraxeña wrong');

//}

//if (result === false) {

  //  console.log ('Login incorrepto')

//}

// el if se utiliza para condicionar
// el else aporta una segunda condicion
// el else if es para que se muestre una sola de las dos opciones

//let score = 70;

//if (score > 30) {
//console.log('Bien campeon');
//} else if (score > 15) {
//  console.log('Estas mejorando')
//}


//else { (score < 30) 
//  console.log('Sigue intentando');
//}

// El uso de switch
// Por ejemplo una tarjeta de banco

// a partir de una sola variable evaluamos diferentes casos
//let typeCard = 'Creditcrd';
// para comprobar si es debito o credito
//switch(typeCard) {
 // case 'debit card':
 //   console.log('Es una tarjeta de debito');
 //   break;
 //   case 'Creditcard':
 //    console.log('Es una Creditcard');
 //    break;
  //    default:
  //    console.log('No tienes money card nada jejne');

//}

//Bucles o iterador para analizar miles de datos
//Acciones repetitivas

//let count = 4

//while(count > 0) {

  //console.log('hello');
  //count = count - 1;
//}



//hile(count > 0) {

  //console.log(count);
  //count = count - 1;
//}


//let count = 0
//while(count < 4){
//  console.log(count);
  //count = count + 1;


//}
// '++' '--'
//let count = 1

//while(count <= 4){
//  console.log(count);
 // count++;
//}

//un array se le puede ubicar el item que se quiere visualizar

//let names = ['ryan', 'joe', 'john'];

//console.log(names[0])

// saber cuantos items hay como length "longitud"

//let names = ['ryan','joe','john'];

//console.log(names.length)

//let names = ['ryan','joe','john'];

//for(let i = 0; i < names.length; i++) {
//console.log(names[i]); 

//}

// Funciones definen una tarea y luego se llama con un nombre
// permite guardar acciones para usar luego

//function greeting(name) {
//    console.log('hello ' + name);
//}

//greeting('nombrePersona');
//greeting('personaNombre');

// se puede usar la funcion sumar

function add(n1,n2) {
  console.log(n1 + n2);
}

add(3,2)
add(100,500)

add(3,' dasgfasg')


