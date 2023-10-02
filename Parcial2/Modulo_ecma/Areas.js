export function areaCuadrado(lado){
    return lado*lado;
}

export function areaTriangulo(base,altura){
    return (base*altura)/2;
}

export function areaRectangulo(base,altura){
    return base*altura;
}
export function areaCirculo(radio){
    return Math.PI*(radio^2)
}

export function dibujarCuadradoASCII(lado) {
    if (lado < 2) {
      return "El lado del cuadrado debe ser mayor o igual a 2.";
    }
  
    const lineaHorizontal = "*".repeat(lado); // Línea superior e inferior del cuadrado
    const espacioInterior = " ".repeat(lado - 2); // Espacio interior entre bordes
  
    // Genera el cuadrado con bordes y espacio interior
    const cuadrado = `${lineaHorizontal}\n${("*" + espacioInterior + "*\n").repeat(lado - 2)}${lineaHorizontal}`;
  
    return cuadrado;
  }
  
//console.log(__dirname);
//console.log(--filname);
//console.log(module);