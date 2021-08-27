describe('Función `calcularParesDesdeHasta`', function() {

    it('Debería sumar los numeros pares entre los parametros', function() {

      expect(calcularParesDesdeHasta(10, 50)).toEqual(630);
    });
  
    
  });



document.write(calcularParesDesdeHasta(10, 50));
