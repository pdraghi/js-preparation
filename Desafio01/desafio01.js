function calcularParesDesdeHasta(a, b) {
        var suma = 0
        for (a; a<=b; a++){
          if (a%2 == 0) {
            suma += a
          }
        }
        return suma
}
