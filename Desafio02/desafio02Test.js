describe('Función `calcularFibonacci`', function() {

    it('Debería calcular secuencia fibonacci', function() {

      expect(calcularFibonacci(10)).toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]);
    });
  
  });
document.write(calcularFibonacci(10));