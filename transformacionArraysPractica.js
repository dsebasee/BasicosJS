//Recibes dos parámetros: una lista de palabras words y
//una palabra word. Primero, busca el índice de la palabra
//en la lista. Después, usa ese índice (que será un número)
//y devuelve todas las palabras de words que sean más largas(length)
//que el número del índice.

function palabrasMasLargasQueIndice(words, word) {
    // Encontrar el índice de la última aparición de la palabra en la lista
    const indice = words.lastIndexOf(word);
  
    // Si la palabra no se encuentra, lanzar un error
    if (indice === -1) {
      throw new Error('La palabra no se encontró en la lista');
    }
  
    // Filtrar las palabras que tengan una longitud mayor que el índice encontrado
    const palabrasMasLargas = words.filter((palabra) => palabra.length > indice);
  
    return palabrasMasLargas;
  }
  
  // Ejemplo de uso
  const listaPalabras = ["perro", "gato", "elefante", "tigre", "rinoceronte", "tigre"];
  const palabraBuscada = "tigre";
  const palabrasFiltradas = palabrasMasLargasQueIndice(listaPalabras, palabraBuscada);
  console.log(palabrasFiltradas); // Salida: ["rinoceronte", "tigre"]