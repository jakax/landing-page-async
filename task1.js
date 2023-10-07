/**
 En este desafío debes crear una función que usando fetch haga llamadas a una API y esta función debe contar las siguientes características:

Realiza la transformación de datos a JSON
Solo permite hacer peticiones tipo GET
Recibir como parámetro de entrada un string que será la URL
Validar que una URL sea correcta, si no lo es debe lanzar un error con el mensaje Invalid URL
Si la URL tiene el formato correcto, pero no existe, debería lanzar un error con el mensaje Something was wrong
Recuerda, para lanzar el error debes usar throw, ejemplo:

throw new Error('Something was wrong');

Para solucionarlo vas a encontrar una función llamada fetchData que recibe un parámetros de entrada:

url: La url de la API.
Dentro del cuerpo de la función fetchData debes escribir tu solución.

Ejemplo 1:

Input:
await fetchData('https://api.escuelajs.co/api/v1/categories');

Output
// return data in json
[...]

Ejemplo 2:

Input:
await fetchData('----');

Output
Error: Invalid URL

Ejemplo 3:

Input:
await fetchData('https://domain-a.com/api-1');

Output:
Error: Something was wrong
 */


async function runCode(url) {
    // Tu código aquí 👈
    try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
    } catch (error) {
        console.log(error);
        switch (error) {
            case 400:
            throw new Error('Invalid URL');
            case 404:
            throw new Error('Something was wrong');
        }
    }

}

// Solution
export async function runCode(url) {
    try {
      new URL(url);
      const response = await fetch(url);
      return response.json();
     } catch(error) {
       if (error.message === "Failed to construct 'URL': Invalid URL"){
         throw new Error('Invalid URL');
       } else {
         throw new Error('Something was wrong');
       }
     }
  }

  
  const url1 = 'https://api.escuelajs.co/api/v1/categories';
  runCode(url1);
  //const url2 = '----';
  //runCode(url2);
  //const url3 = 'https://domain-a.com/api-1';
  //runCode(url3);
  //const url4 = 'http://';
  //runCode(url4);
  //const url5 = 'text';
  //runCode(url5);
  //const url6 = '';
  //runCode(url6);
  
  /*
  Should throw an error with URL: '---'

expect(received).toBeInstanceOf(expected)

Expected constructor: Error

Received value has no prototype
Received value: undefined
Should throw an error with URL: 'http://'

expect(received).toBeInstanceOf(expected)

Expected constructor: Error

Received value has no prototype
Received value: undefined
Should throw an error with URL: 'text'

expect(received).toBeInstanceOf(expected)

Expected constructor: Error

Received value has no prototype
Received value: undefined
Should throw an error with URL: ''

expect(received).toBeInstanceOf(expected)

Expected constructor: Error

Received value has no prototype
Received value: undefined
Should throw an error with valid URL but inexistent API

expect(received).toBeInstanceOf(expected)

Expected constructor: Error

Received value has no prototype
Received value: undefined
Should return the data in json format
 */