/* console.log("inicio");
setTimeout(() => {
  console.log("Ejecutando un settimeout, se ejecuta una sola vez");
}, 2000);

setInterval(() => {
  console.log(
    "Ejecutando un setinterval, se ejecuta iindefinido cada intervalo"
  );
}, 5000); */

/* setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000); */

/* let temporizador = setTimeout(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador);
console.log("despues del clearTimeout");
 */

/* 
Procesamiento single thread y multi thread.
Operaciones de CPU y Operaciones I / O(input / output)
Operaciones concurrentes y paralelas
Operaciones bloqueantes y no bloqueantes
Operaciones sincronas y asincronas.
 */
/* JS tiene un modelo asincrono y no bloqueante , con un loop de enventos imprementado en un solo hilo (single thread para operaciones de entreda y sdalida(I / O) */
/* Codigo sincrono bloqueante */

/* (() => {
  console.log("codigo sincrono");
  console.log("inicio");

  function dos() {
    console.log("Dos");
  }
  function uno() {
    console.log("uno");
    dos();
    console.log("tres");
  }

  uno();
  console.log("fin");
})();
console.log("++++++++++++++++++++++"); */
/* Codigo sincrono no bloqueante */
/* (() => {
  console.log("Codigo asincrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);
    dos();
    console.log("tres");
  }

  uno();
  console.log("fin");
})();
 */
//46 callbacks

/* function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log("inicia callback");
  console.log(`Callback${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log("segundo callback");
    console.log(`Callback${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log("tercer callback");
      console.log(`Callback${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log("cuarto callback");
        console.log(`Callback${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log("quinto callback");
          console.log(`Callback${value}, ${result}`);
          cuadradoCallback("Fin... continuara ", (value, result) => {
            console.log("finaliza calback");
            console.log(`Callback${value}, ${result}`);
          });
        });
      });
    });
  });
});
 */

// Clase 47) Promesas
/* 
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`el valor ${value} no es un numero`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | Math.random());
  });
}
cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicia promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(6);
  })
  .then((obj) => {
    console.log(`Fin de promise`);
  })
  .catch((err) => console.error(err));
 */
//Clase 48 Async Await

function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(`Error el valor ${value} no es un nuemro`);
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}
//FUNCION DECLARADA
async function funcionAsyncronaDeclarada() {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise("1");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
  } catch (err) {
    console.error("Errol");
  }
}

funcionAsyncronaDeclarada();
//FUNCION EXPRESADA

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async EXPFunction");

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async EXPFunction: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(2);
    console.log(`Async EXPFunction: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(3);
    console.log(`Async EXPFunction: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(4);
    console.log(`Async EXPFunction: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(5);
    console.log(`Async EXPFunction: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise("1");
    console.log(`Async EXPFunction: ${obj.value}, ${obj.result}`);
  } catch (err) {
    console.error("ErrolEXP");
  }
};

funcionAsincronaExpresada();
