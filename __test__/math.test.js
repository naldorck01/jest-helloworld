import { sumar, restar, multiplicar, dividir } from '../math'

describe('Calculos Matematicos', ()=> {

    test('Prueba de sumas', () => {
        expect(sumar(1, 1)).toBe(2)
    })

    test('Prueba de restas', () => {
        expect(restar(1, 1)).toBe(0)
    })

    test('Prueba de multiplicación', () => {
        expect(multiplicar(1, 1)).toBe(1)
    })

    test('Prueba de división', () => {
        expect(dividir(1, 1)).toBe(1)
    })

})