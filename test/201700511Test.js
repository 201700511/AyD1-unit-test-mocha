const assert = require('chai').assert;
const functions = require('../201700511')

const invertircadena = functions.invertircadena('Hola Mundo')
const fibonacci = functions.fibonacci(5)
const dividirCadena = functions.dividirCadena('Hola, Mundo', ',')
const primo = functions.primo(5)
const divisores = functions.divisores(20)

describe('Juan Pablo Alvarado Velasquez 201700511',function(){
    it('Deberia retornar la cadena al reves',function(){
        assert.equal(invertircadena,'odnuM aloH')
    })
    it('Deberia retornar <1 1 2 3 5>',function(){
        assert.equal(fibonacci, '1 1 2 3 5')
    })
    it('Deberia retornar Hola y Mundo como cadenas distintas',function(){
        assert.equal(dividirCadena,'Hola, Mundo')
    })
    it('Deberia retornar <2, 3, 5>',function(){
        assert.typeOf(primo, '2, 3, 5')
    })
    it('Devolver retornar <1, 2, 4, 5, 10, 20>',function(){
        assert.typeOf(divisores, '1, 2, 4, 5, 10, 20')
    })
})